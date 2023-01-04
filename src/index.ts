import { Router } from 'itty-router';
import Fuse from 'fuse.js'
import countries from "./country.json";
import index from "./nameindex.json";
import jsonQuery from 'json-query'

const router = Router();

const header = {
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Cache-Control": "s-maxage=10",
  "Access-Control-Max-Age": "1",
};


const options = {includeScore:0.9,useExtendedSearch:true, keys: ['name.common', 'name.official','cca2','cca3','independent','capital','region','subregion','continents','languages','timezones','population','status','unMember','altSpellings',"currencies.*.name"] }

// Create the Fuse index
const myIndex = Fuse.createIndex(options.keys, countries)
// initialize Fuse with the index
const fuse = new Fuse(countries, options, myIndex)

router.get('/api', async ({ params }, env) => {
  return new Response(JSON.stringify(countries), {
    headers: header
  })
})

router.get('/api/search', async ({ query }, env) => {
  const result = fuse.search(query)
  return new Response(JSON.stringify(result), {
    headers: header
  })
})

router.get('/api/query', async ({ query }, env) => {
  const result = jsonQuery(query.query,{data:countries});
  return new Response(JSON.stringify(result?.value), {
    headers: header
  })
})

router.get('/api/name/:id', async ({ params }, env) => {
  let id:number = index[decodeURI(params.id)];
  return responseByIndex(id);
})

async function responseByIndex(id:number){
  if (id){
    return new Response(JSON.stringify(countries[id]), { headers: header });
  }
  else{
    return new Response(
      JSON.stringify({ code: 404, Messge: "country not found" }),
      {
        headers: header,
        status: 404,
      }
    );
  }
}


export default {
  fetch: router.handle,
}
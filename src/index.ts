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
  "Cache-Control": "s-maxage=43200",
  "Access-Control-Max-Age": "43200",
};


const options = {includeScore:true,useExtendedSearch:true, keys: ['name.common', 'name.official','cca2','cca3','independent','capital','region','subregion','continents','languages','timezones','unMember','altSpellings',"borders"] }

// Create the Fuse index
const myIndex = Fuse.createIndex(options.keys, countries)
// initialize Fuse with the index
const fuse = new Fuse(countries, options, myIndex)


const missingHandler = () => new Response(JSON.stringify({ code: 404, Messge: "not found" }),
{
  headers: header,
  status: 404,
})



const errorHandler = error =>
new Response(JSON.stringify({ code: 500, Messge: error.message || 'Server Error' }),
{
  headers: header,
  status: 500,
})

router.get('/api/v1', async ({ params }, env) => {
  return new Response(JSON.stringify(countries), {
    headers: header
  })
})

router.get('/api/v1/search', async ({ query }, env) => {
  const result = fuse.search(query)
  return new Response(JSON.stringify(result), {
    headers: header
  })
})

router.get('/api/v1/query', async ({ query }, env) => {
  const result = jsonQuery(decodeURI(query.query),{data:countries});
  return new Response(JSON.stringify(result?.value), {
    headers: header
  })
})

router.get('/api/v1/:id', async ({ params }, env) => {
  let id:number = index[decodeURI(params.id?.toLowerCase())];
  return responseByIndex(id);
})

router.all("*",missingHandler)

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


addEventListener('fetch', event =>
  event.respondWith(
    router
      .handle(event.request)
      .catch(errorHandler)
  )
)

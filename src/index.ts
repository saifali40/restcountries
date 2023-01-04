import { Router } from 'itty-router';

import countries from "./country.json";
import index from "./nameindex.json";
import capital from "./capital.json";
import timezone from "./timezones.json";

const router = Router();

const header = {
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Cache-Control": "s-maxage=10",
  "Access-Control-Max-Age": "1",
};


router.get('/api', async ({ params }, env) => {
  return new Response(JSON.stringify(countries), {
    headers: header
  })
})

router.get('/api/name/:id', async ({ params }, env) => {
  let id:number = index[decodeURI(params.id)];
  return responseByIndex(id);
})

router.get('/api/capital/:id', async ({ params }, env) => {
  let id:number = capital[decodeURI(params.id)];
  return responseByIndex(id);
})

router.get('/api/timezone', async ({ query }, env) => {
  let ids : number[] = timezone[decodeURI(query?.id?.toLocaleLowerCase())];
  return responseByIndexes(ids);
})


async function responseByIndexes(ids:any[]){
  if (ids){
    return new Response(JSON.stringify(ids.map((i)=>countries[i])), { headers: header });
  }
  else{
    return new Response(
      JSON.stringify({ code: 404, Messge: "countries not found" }),
      {
        headers: header,
        status: 404,
      }
    );
  }
}

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
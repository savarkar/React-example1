const FetchClient={
    async get(url){
       return await fetch(url);
   },
   async post (url, body){
   return await fetch(url,{
   method: 'POST',
   body: JSON.stringfy(body),
   headers: {
       'Content-type': 'application/json'
   }	
   });	
   }
   }
   export default FetchClient;
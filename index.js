const http=require('http');

const server=http.createServer((req,res)=>{

if(req.url == "/"){
    res.end("Home section")
    return;
   }

   if(req.url == "/about"){
    res.end("about section")
    return;
   }

   if(req.url == "/profile"){
    res.end("profile section")
    return;
   }

   if(req.url == "/contact"){
    res.end("contact section")
    return;
   }

   return res.end("404 not found")
})

server.listen(3001);
const http=require('http')

const PORT=6500;

const myServer=http.createServer((request,response)=>{
    response.write("Welcome to http module");
    response.write("Nodejs working fine");
    response.end();
})
myServer.listen(PORT,()=>{
    console.log("My Server is running on 5500 port no")
})
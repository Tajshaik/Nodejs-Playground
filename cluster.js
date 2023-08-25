const http = require("node:http")
const clust = require("node:cluster")

if(clust.isMaster){
    console.log(`node is set to master${process.pid}` )
    clust.fork()
    clust.fork()
    clust.schedulingPolicy = clust.SCHED_RR ; 
}
else{
    console.log(`worker ${process.pid}`)
const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('home page')
    } else if(req.url === '/slow-page'){
        for(let i=0; i<6000000;i++)
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('About page')
    }
})

server.listen('3000',()=>{
    console.log("Server is running on loccalhost 3000")
})
}
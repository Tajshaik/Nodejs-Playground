//const add = require("./Add")
//console.log('Hello world from nodejs!')
// const sum = add(1,2)
// console.log(sum)
// const sum1 = add(3,2)
// console.log(sum1)
/**
 * Caching
 */
// const Name = require("./Caching")
// console.log(Name.getName())
// Name.setName('Joey')
// console.log(Name.getName())

// const friendName = require('./Caching')
// console.log(friendName.getName())

//how not cache
// const name = require("./Caching")
//  const frdName = new name('Joey')

//  console.log(frdName.getName())
//  frdName.setName('chandler')
//  console.log(frdName.getName())


//  const frdName1 = new name('Joey')
/** 
const Pizzashop = require('./EventExtends');

const pizzas = new Pizzashop();

pizzas.setorder()
pizzas.on("order",(size,toppings)=>{
    console.log(`Order placed! ${size} + ${toppings}`)
})
pizzas.getOrder()
pizzas.setorder("large","mushroom")
pizzas.getOrder()
*/
/** 
const buffer = new Buffer.from('Hello Taj')
buffer.write("code")
console.log(buffer.toString())
console.log(buffer.toJSON())
console.log(buffer.toString()) */
/** 
const { error } = require("node:console")
const fsModule = require("node:fs")
console.log("one")
//read contents of file synchronously
const filecontents =fsModule.readFileSync("./file.txt","utf-8")
console.log(filecontents)
console.log("two")
//read contents of file asynchronously using callback
 fsModule.readFile("./file.txt","utf-8",(error,data,)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})
console.log("third")
// read contents of file asynchronously using promises.
const FilsModule = require("node:fs/promises")
FilsModule.readFile("./file.txt","utf-8")
.then((data)=>{
 console.log(data)
}).catch((error)=>{
    console.log(error)
})
console.log("fourth")
// read contents of file asynchronously using async await
async function readFile(){
    try{
       const data = await FilsModule.readFile("./file.txt","utf-8");
       console.log(data)
    }
    catch{
        console.log(error)
    }
}
readFile()
// write function synchronous
fsModule.writeFileSync("./greet.txt","Hellow write function")
// write function asynchronous
fsModule.writeFile("./gteer2.txt", "Hellow callback write function",(error)=>{
 if(error){
    console.log(error)
 }
 else{
    console.log('file created')
 }
})

const fileStream = require("node:fs")
const readableStream = fileStream.createReadStream("./gteer2.txt",{
    encoding:"utf-8",
    highWaterMark: 2,
}
    )
const writablestream = fileStream.createWriteStream("./file.txt")
//stream data s chinck on a event listenerf of data
readableStream.on("data",(chunk)=>{
 console.log(chunk)
 writablestream.write(chunk)
})
*/
/**
    tradtional html response
     res.end("<h1>Hello world!!</h1>")
    
     using the fs module and readfilesync method to send response from a separate html file
      const file = fileSys.readFileSync("./index.html","utf-8")
      res.end(file)

      //using the readstream and pipe (incase if the html has large data to retrive it wont stop the execution)
  fileSys.createReadStream("./index.html").pipe(res)
  
   */
  /** 
const http = require("node:http")
const path = require("node:path")

const server= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('home page')
    } else if(req.url === '/About'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('About page')
    } else if(req.url === '/contact'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.end('Contact page')
    } else if(req.url === '/api'){
        const superHero = {
            firstName: "bruce",
            lastName: "wayne"
        }
        res.writeHead(200,{'content-type':'application/JSON'})
        res.end(JSON.stringify(superHero))
    }
})

server.listen('3000',()=>{
    console.log("Server is running on loccalhost 3000")
}) */

setTimeout(()=>{
    console.log('seTimeot')
},1000)

setImmediate(()=>{
    console.log("setImmediate")
})
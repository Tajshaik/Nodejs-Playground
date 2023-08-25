const EventEmitter = require("node:events")
// event emitter calss is retuned
const Emitter = new EventEmitter();
//on ordering pizza is retuned
Emitter.on("order",(size,toppings)=>{
    console.log(`Pizza is oder ${size} and topping is ${toppings}`)
})
// to send or regiter a event (order is event name)
Emitter.emit("order","Large","pine apple")

//To order more toppings a, pass them as arguments
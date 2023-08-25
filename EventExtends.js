const Eventmodule = require("node:events")
class EventEmit extends Eventmodule{
    constructor(){
    super();
   this.ordernum = 0;
    }

   setorder(size,toppings){
     this.ordernum++;
     this.emit("order",size,toppings)
   }

   getOrder(){
    console.log(this.ordernum)
   }
  }

  module.exports = EventEmit
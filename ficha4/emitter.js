//5
class Emitter{
    constructor(){
        this.events = {};
    }
}
// type = "greet"
//listener = function()....


Emitter.prototype.on = function(type, listener){
    if(this.events[type] == undefined){
         this.events[type] = [];
    }
   
    this.events["greet"].push(listener);
}
Emitter.emit("greet");
//ex3

function started() {
    //console.log("started download");

}

function update (progress){
   //console.log(progress + "% of download completed");

}

function completed (){
    //console.log("completed download");
    

}

function peformDownload (started, update, completed){

    started();    
    for (let i= 0; i <= 100; i++){
        update (i);
    }
    completed();
}

//peformDownload (started, update, completed)

  

var arrayUtils = require("./ArrayUtils");
var array = [17, 15];






//console.log(arrayUtils.isEmpty(array));
//console.log(arrayUtils.max(array));
//console.log(arrayUtils.min(array));
console.log(arrayUtils.average(array));
var  array = [];

array.push(function(){
    console.log("Function1");
});

array.push(function(){
    console.log("Function2");
});

array.push(function(){
    console.log("Function3");
});


for (let i = 0; i < array.length; i++) {
    array[i]();
    
}


array.forEach(element, index, array)=>{
    element();
});






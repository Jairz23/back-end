//implementação
//ex5
function calculateGrade(gradeP,gradeT){
    var grade = 0.7 * gradeP + 0.3 * gradeT;
    if(grade < 9.5){
        console.log("Reprovado");
    }
    else{
        console.log("APROVADO");
    }
}
//ex6

function meses(names){

    var meses  = ["janeiro","fevereiro","março"];
    console.log(meses[names -1]);
}
//7

function numeros(operado1, operador, operado2){
  if(operador =='+'){
      console.log(operado1 + operado2);
  } 
  else if(operador == '-'){
      console.log(operado1 - operado2);
  }
  else if(operador =='*'){
      console.log(operado1 * operado2);
  }
  else if(operador == '^'){
      console.log(operado1 ** operado2);
  }

}
//ex8

function multiplo(){
    var multiplo = 0;
    for(var i=0; i<=5; i++){
       multiplo = multiplo + 1;
    }
}
var resultado = multiplo();
console.log(resultado);
//ex9
//ex10
//11

//calculateGrade(12, 12);
//meses(3);
//implementação
//ex1

function imc (peso,altura){
    var imc = peso/(altura * altura);
    if(imc < 18.5){
        console.log("Abaixo Peso");
    }
    else if(imc >18 && imc<25){
        console.log("Peso Normal");
    }
    if(imc < 25){
        console.log("Acima do Peso");
    }
    else if(imc >25 && imc<30){
        console.log("Obeso");
    } 

}

//ex2
var str = reverse("Hoje e Domingo");

function reverse(str){
    var reversedstr = "";
    var splittedstr = str.split(" "); //palvras['hoje'; 'é'; 'domingo']indice[hoje(1); é(2); domingo(3)]
    
    for(var i = 0; i < str.length; i++){
        var word = splittedstr[i];
        for(var j = word.length - 1; j >= 0; j--){
            var letter = word[j];
            reversedstr += letter;
        }
        reversedstr += " ";
    }
    return reversedstr;
}

//ex3

function contavogal(str){

    var conta = 0;
    for(var i = 0; i < str.length; i++){
        if(str [i]== "a" || str [i] =="e" || str [i] =="i"  || str [i] =="o"  || str [i] =="u");
     
    }
}
//ex4
var str ="Mundo bonito";
var letter = "n";
var count = countletter(str,letter);

function countletter(str,letter){
    var count = 0; 
    for(var i = 0; i<str.letter; i++){
        if(str[i] == letter){
            count ++;
        }
    }
     return count;
}

//ex5


function calculateTime(he, me, se, hs, ms, ss){   //apartir daqui vai mim dar o valor em segundo de entrada e saida 
    var totalTimeES = he * 3600 + me * 60 + se;
    var totalTimeSS = hs * 3600 + me * 60 + ss;

    var difinirCodigs = totalTimeES - totalTimeSS;

    var hours = Math.floor(difinirCodigs / 3600);    //apartir daqui vai sair valor em horas
    var hoursRemainder = difinirCodigs % 3600;

    var minutes = Math.floor(hoursRemainder / 60);
    var seconds = hoursRemainder % 60;

    console.log("Trabalho " + hours + "h:" + minutes + "m:" + seconds + "s");

}
//ex6

var height = 5;
var line = "" ; 
var width = 5 ;

function retangule() {
    for(var i = 0 ; i < height; i++){
        console.log(line);
        line +="*"
    } 
    for(var i = 0; i < width; i++){
        console.log(line);
        line += "*" ;
    
    }
    

}
//ex7
 
//ex8

function caixa(width,height){
    for(let i = 0; i < height; i++){
        var line = "";
    
    for(let j = 0; i < width; j++){
        if(i == 0 || i == height -1){
            line += "*";
        }
        else{
            if(j == 0 || j == width -1){
                line += "*";

            }
            else{
                line += " "
            }
        }


        }
        console.log(line);
        
    }

}
//ex9

function stundents (){
    var stundents = [];
    
    for (let i = 0; i < 100; i++){
        var stundents = {
            number: Math.ceil(math.random() * 1000),
            grade: Math.random() * 20
        };
        stundents.push(aluno);
    }
}

function listAll(students) {
    for (let i = 0; i < students.length; i++) {
        var students = students[i];
        console.log("Number: " + student.number + ",Grade: " + student.grade);

    }
}
function studentstast(students, option) {
    switch (option) {
        case 1:
            listAll(students);
            break;
          case 2:
              bestGrade(students);
        default:
            console.log("Invalid option")
            break;
    }
    
}
//melhor nota
function bestGrade(students) {
    var best = student[0].grade;

    for(var i = 1; i < students.length ; i++){
        if(students[i].grade > best){
            best=students[i].grade;
        }
        return best;
    }
}
//pior nota 
function worstGrade(students) {
    var worst = student[0].grade;

    for(var i= 1; i < students.length; i++){
        if(student[i].grade < worst){
            worst = students[i].grade;
        }
        return worst;
    }
}



//nota mas proxima da media
function media(student){
    var soma=0;
    for(var i=0; i<student.length; i++){
        soma+=students[i].grade;
    }
    return soma / students.length;
}
//respetiva media

function media(student){
    var avg=media(students);

     for(let i=0; i <student.length; i++){
         if(student[i].grade-avg<resultado){
             resultado=student[i].grade-avg;
             student=student[i];
         }
     }
     return student;
}
//nota negativa
function negativas(student){
    var count = 0;
    for(let i=o; i<student.length; i++);
        var student=student[i];
        if(student.nota<9.5){
            count++;
        }
    return count;

}

//nota positives
function contPositives(student){
    var sum = 0;
     for(i=0; i<student.length; i++){
         if(student[i].grade>=9.5){
             sun++;
         }
     }
     return sum;
}
//

var students = {
    number: 22634,
    grade: 18

};
var student1 = {
    number: 22634,
    grade: 18

};
var student2 = {
    number: 22634,
    grade: 18

};
var student = [];

student.push(student);
student.push(student1);
student.push(student2)






caixa (3,3)
//ivoncação
//imc(18.5, 20)

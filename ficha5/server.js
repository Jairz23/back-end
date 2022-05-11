const express = require('express')
const fs = require('fs');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const { json } = require('express/lib/response');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


function readFile(path){
    var fileContent = fs.readFileSync(path,"utf-8");
    return fileContent;
}
console.log(readFile('./persons.json'))

//endpoint
//responde um pedido HTTP
//1ª e a rota /path do endpoit
//2ª e o codigo que vai ser exercutado quando 
// este endpoit for invocado


app.get('/', function(request, response) {
  response.send('Hello would!');}
)

app.get('/users', function(request, response) {
  response.send(personsObject);
 });
//Apagar uma pessoa do ficheiro pelo seu ID
 app.delete('/users/:id', function(request, response) {
   var id = request.params.id;
  
   var person= personsObject["person" + id];
   if (person==undefined) {
     response.send("This is does not exist !");
   }
  else{
    delete personsObject["person" + id];
    response.send("This id  " + id + "  was deleted "   )
  }
 });
//Selecionar apenas uma pessoa pelo seu ID e
 app.get('/users/:id', function(request, response) {
  var id = request.params.id;
  var person= personsObject["person" + id];

  if (person == undefined) {
    response.send(" This is does not exist ! ");
  }
 else{
   response.send(person)
 }
});

app.post('/users', function(request, response) {

  //var test =  request.body.x;

  var person = request.body;
  //selecionar as chaves num array e obter o seu tamanho

  var size = Object.keys(personsObject).length;
  //incrementar 1 valor
  size++;
  //atribuir o id igual ao tamnanho + 1

  person.id = size;
  //criar uma nova chave por ex: person que tera o valor da person que vem no body

  personsObject['person' + person.id] = person;
  //enviar o id da pessoa que foi inserida
  response.send(person.id + ""); 

//para adicionar o objeto 
// obj.nina = 10;
// obj[str] = 10;
 //personsObject.nina = 10;

});

app.put('/users', function(request, response) {
  response.send("THIS IS A PUT");
});

app.delete('/users', function(request, response) {
  response.send("THIS IS A DELETE");
 });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var personsString = readFile('./persons.json');
var personsObject = JSON.parse(personsString);
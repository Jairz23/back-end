const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database  : 'my_db'  
});

connection.connect()

connection.query("SELECT * FROM persons" , function (err, rows, fields){
    if (err) throw err 

    console.log('the persons is: ' , rows[0].persons)

})

connection.end()

app.get('/', function(request, response) {
    response.send('Hello would!');}
)
const express = require('express')
const app = express()

const database = require("./database");

/*
var dados = {
  nome: "nome1",
  preco: 50.00
}

var query = database.insert(dados).into("test").then(data => {
  console.log(data);
}).catch(err =>{
  console.log(err);
});
*/



app.get('/', function (req, res) {
  database.select().table("curso").then(data => {
    console.log(data);
    res.send(data)
  }).catch(err => {
    console.log(err);
  });
})

app.listen(3000)

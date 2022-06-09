const express = require('express');
const Cell = require("./Controller/cellController");
const User = require("./Controller/pesquisadorController");
const handlebars = require('express-handlebars');
const { dirname } = require('path');
const server = express();

var hbs = handlebars.create({defaultLayout: 'main'});
server.engine('handlebars', hbs.engine);
server.set('view engine', 'handlebars');

server.use(User);
server.use(Cell);
server.use(
    express.urlencoded({
      extended: true,
    }),
)
server.use(express.json());


server.get("/style",function(req,res){
    res.sendFile(__dirname+"/CSS/style.css");
})

server.get("/",function(req,res){
    res.render('inicial');
});

server.get("/inicial",function(req,res){
    res.render('inicial');
});




server.listen(3000);
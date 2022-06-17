const express = require('express');
const handlebars = require('express-handlebars');
const { dirname } = require('path');
// const { path } = require('express/lib/application');
const path = require('path');
const server = express();

(async () =>{
    const Cell = require("./Controller/cellController");
    const User = require("./Controller/pesquisadorController");
    const database = require("./DataBase/db");
    await database.sync({force: true});
    server.use(User);
    server.use(Cell);
})();

var hbs = handlebars.create({defaultLayout: 'main'});
server.engine('handlebars', hbs.engine);
server.set('view engine', 'handlebars');


server.use(
    express.urlencoded({
      extended: true,
    }),
)
server.use(express.json());
server.use(express.static(path.join(__dirname, 'Resourcer')))


server.get("/style",function(req,res){
    res.sendFile(__dirname+"/CSS/style.css");
})


server.get("/",function(req,res){
   
    res.render('inicial');
});

server.get("/equipe",function(req,res){
   
    res.render('Equipe/equipe');
});

server.get("/inicial",function(req,res){
    res.render('inicial');
});




server.listen(3000);
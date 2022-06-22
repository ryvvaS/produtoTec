const express = require('express');
const handlebars = require('express-handlebars');
const { dirname } = require('path');
// const { path } = require('express/lib/application');
const path = require('path');
const server = express();

(async () =>{
    const routes = require("./Controller/routes");
    const database = require("./DataBase/db");
    await database.sync({alter: true});
    server.use(routes)
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







server.listen(3000);
const express = require('express');
const Cell = require("./Controller/cellController");
const User = require("./Model/Pesquisador");
const { dirname } = require('path');
const server = express();

server.use(express.json());
server.use(Cell);


server.listen(3000);
const Sequelize = require('sequelize');
const sequelize = require('../DataBase/db');
const db = require('../DataBase/db');

const Pesquisador = db.define('Pesquisador',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

// await Pesquisador.sync({force: true})

module.exports = Pesquisador;
const Sequelize = require('sequelize');
const sequelize = require('../DataBase/db');
const db = require('../DataBase/db');

const Celula = db.define('Celula',{
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
    tipo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dataColeta:{
        type: Sequelize.DATE,
        allowNull: false
    }
});

// Celula.sync({alter: true})

module.exports = Celula;
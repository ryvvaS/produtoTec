const Sequelize = require('sequelize');
const sequelize = require('../DataBase/db');
const db = require('../DataBase/db');
const Pesquisador = require('./Pesquisador');

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

Celula.belongsTo(Pesquisador, {
    constraints: true,
    foreignKey: 'idPesquisador'
})

Pesquisador.hasMany(Celula, {
    foreignKey: 'idPesquisador'
})

// await Celula.sync({force: true})

module.exports = Celula;
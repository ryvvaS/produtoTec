const { Sequelize } = require('sequelize');

// caso vá rodar em outro computador colocar as informacoes do seu banco de dados
const sequelize = new Sequelize('bd_sistema', 'root', 'Vini@852456', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
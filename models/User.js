const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Criar a tabela
User.sync()
//Verifica se há alguma diferença na tabela, se sim realiza a alteração
//User.sync({alter: true})

module.exports = User;


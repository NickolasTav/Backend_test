const Sequelize = require("sequelize");

const sequelize = new Sequelize("bd_aplicacao","nickolas_tavares", "12345678", {
    host: "db4free.net",
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso")
}).catch(function(){
    console.log("Erro, conexão com o banco de dados não realizada com sucesso!")
})

module.exports = sequelize;
const express = require("express");
const app = express();
const User = require("./models/User");

app.use(express.json())

app.get("/", async (req,res) => {
    res.send("Pagina inicial - Nickolas Tavares");
});

app.post("/cadastrar", async (req,res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then(()=>{
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        })

    });

    //res.send("Página Cadastrar");
});


app.listen(8080, ()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})
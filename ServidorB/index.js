const express = require("express")
const app = express()
const port = process.env.PORT || 3001;
const usuarios = [
    {
        id: 1,
        username: "monster_master",
        password: "M0NSte3RD61Nk"
    },
    {
        id: 2,
        username: "januario_1",
        password: "amoEsseGatinhu"
    },
    {
        id: 3,
        username: "michele_bolsonaro",
        password: "damaresSalvadora"
    },
]


app.listen(port, () => { console.log("Porta: ", port) })

app.use(express.json())


app.get('/listar', (req, res) => {
    res.json(usuarios)
})

app.post('/cadastrar', (req, res) => {
    let usuario = {}

    usuario.id = pegarId()
    usuario.username = req.body.username
    usuario.password = req.body.password

    usuarios.push(usuario)
    res.json(usuario)
})

app.put('/logar', (req, res) => {
    const usuario = req.body
    if(valida(usuario.username, usuario.password)){
        res.send("Login concluído!")
    } else {
        res.send("Credenciais inválidas")
    }
})


function pegarId() {
    let maior = 0
    for (let usuario of usuarios) {
        if (usuario.id > maior) {
            maior = usuario.id
        }
    }
    return maior + 1
}

function valida(username, password) {
    for(let usuario of usuarios){
        if(usuario.username == username && usuario.password == password){
            return true
        }
    }

    return false
}
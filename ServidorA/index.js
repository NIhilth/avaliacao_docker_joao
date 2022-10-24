const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("Porta: ", port) })

app.get('/', (req, res) => {
    console.log("Hello world!");
    res.send("Hello world!")
})

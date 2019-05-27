const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const jsonParser = bodyParser.json()

app.use(cors())

app.post('/', jsonParser, function (req, res) {
    let name = JSON.stringify(req.body.name)
    let pwd = JSON.stringify(req.body.pwd)
    console.log(name + pwd)

    if (name == JSON.stringify("marlena") && pwd == JSON.stringify("123")) {
        res.send({status: 200})
    } else {
        res.send({status: 400})
    }
})

module.exports = app

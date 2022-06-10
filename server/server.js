const Express = require('express')
const server = Express()
const bodyParser = require('body-parser')

//configurando express
server.use(Express.text())

//configurando bodyparser
    server.use(bodyParser.urlencoded({extended:false}))
    server.use(bodyParser.json())

//configurando a view engine
    server.set('view engine','ejs')

//definindo pasta de arquivos staticos
    server.use(Express.static('public'))



module.exports = server
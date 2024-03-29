
const bodyParser = require('body-parser')
const consign = require('consign')

const Express = require('express')
const server = Express()

//configurando bodyparser
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())


//rotas
consign().include('routs').into(server).then('database/database.js').into(server)
consign().include('models').into(server).then('controllers').into(server)

//configurando express
server.use(Express.text())


//configurando a view engine
    server.set('view engine','ejs')

//definindo pasta de arquivos staticos
    server.use(Express.static('public'))



module.exports = server

const Express = require('express')
const server = Express()
const port = process.env.PORT | 8080
const bodyParser = require('body-parser')
const connection = require('./database/database')
const noticia = require('./database/noticia')

//configurando banco de dados
    connection.authenticate().then(()=>{
        console.log(`\nconexão com banco de dados efetuada com sucesso\n`)
    }).catch((err)=>{
        console.log(`\nerro ao iniciar o banco de dados!! ${err}`)
    })



//configurando express
    server.use(Express.text())

//configurando bodyparser
    server.use(bodyParser.urlencoded({extended:false}))
    server.use(bodyParser.json())

//configurando a view engine
    server.set('view engine','ejs')

//definindo pasta de arquivos staticos
    server.use(Express.static('public'))

//rotas

    server.get('/',(req,res)=>{
        res.render('index')
    })
    
    server.get('/escrever',(req,res)=>{
        res.render('escrever')
    })



server.listen(port,(err)=>{
    if(err) console.log(`erro ao iniciar protocolo http: ${err}`)
    console.log(`\nservidor iniciado na porta ${port}\n`)
})
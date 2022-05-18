
const mensagem= require('./libs/mensagem')
const Express = require('express')
const server = Express()
const port = process.env.PORT | 8080
const bodyParser = require('body-parser')
const connection = require('./database/database')
const noticia = require('./database/noticia')


//configurando banco de dados
    connection.authenticate().then(()=>{
        mensagem(`conexão com banco de dados efetuada com sucesso`)
    }).catch((err)=>{
        mensagem(`erro ao iniciar o banco de dados!! ${err}`)
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

server.get('/brasil',(req,res)=>{
    res.render('brasil')
})

server.get('/internacional',(req,res)=>{
    res.render('internacional')
})

server.get('/fotos',(req,res)=>{
    res.render('fotos')
})

server.get('/economia',(req,res)=>{
    res.render('economia')
})

server.get('/saude',(req,res)=>{
    res.render('saude')
})

server.get('/ciencia',(req,res)=>{
    res.render('ciencia')
})









server.listen(port,(err)=>{
    if(err) mensagem(`erro ao iniciar protocolo http: ${err}`)
    mensagem('servidor iniciado na porta ${port}')
})

const mensagem= require('./libs/mensagem')
const server = require('./server/server')
const port = process.env.PORT | 8080
const connection = require('./database/connection')()
const noticia = require('./database/noticia')
const routs = require('./routs/routs')(server)



















server.listen(port,(err)=>{
    err == true ? mensagem(`erro ao iniciar o servidor na porta ${port}`) :  mensagem(`servidor iniciado na porta ${port}`)
   
})
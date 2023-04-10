
require('dotenv').config()
const mensagem= require('./libs/mensagem')
const server = require('./server/server')
const port = process.env.PORT | 8080























server.listen(port,(err)=>{
    err == true ? mensagem(`erro ao iniciar o servidor na porta ${port}`) :  mensagem(`servidor iniciado na porta ${port}`)
   
})
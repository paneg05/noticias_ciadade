
const mensagem= require('./libs/mensagem')
const server = require('./server/server')
const port = process.env.PORT | 8080
const connection = require('./database/database')
const noticia = require('./database/noticia')
const expressLayouts = require('express-ejs-layouts')
const routs = require('./routs/routs')(server)


connection.query(
    'SELECT id FROM noticia WHERE id = 1',(err,results)=>{
        if(err) console.log(err)
        if(results) mensagem('banco de dados conectado com sucesso !!')
    }
)

















server.listen(port,(err)=>{
    err == true ? mensagem(`erro ao iniciar o servidor na porta ${port}`) :  mensagem(`servidor iniciado na porta ${port}`)
   
})
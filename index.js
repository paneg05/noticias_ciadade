
const mensagem= require('./libs/mensagem')
const server = require('./server/server')
const port = process.env.PORT | 8080
const connection = require('./database/database')
const noticia = require('./database/noticia')
const routs = require('./routs/routs')(server)

connection.query(
    'SELECT id FROM noticia WHERE id = null',(err,results)=>{
        if(err) console.log(err)
        if(results) mensagem('banco de dados conectado com sucesso !!')
    }
)

















server.listen(port,(err)=>{
    err == true ? mensagem(`erro ao iniciar o servidor na porta ${port}`) :  mensagem(`servidor iniciado na porta ${port}`)
   
})
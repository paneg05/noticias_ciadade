
const mensagem= require('./libs/mensagem')
const server = require('./server/server')
const port = process.env.PORT | 8080
const connection = require('./database/database')
const noticia = require('./database/noticia')
const routs = require('./routs/routs')(server)

//configurando banco de dados
    connection.authenticate().then(()=>{
        mensagem(`conexão com banco de dados efetuada com sucesso`)
    }).catch((err)=>{
        mensagem(`erro ao iniciar o banco de dados!! ${err}`)
    })






//rotas











server.listen(port,(err)=>{
    err == true ? mensagem(`erro ao iniciar o servidor na porta ${port}`) :  mensagem(`servidor iniciado na porta ${port}`)
   
})
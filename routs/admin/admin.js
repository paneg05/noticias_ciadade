

module.exports = (server)=>{
    
    server.get('/admin',(req,res)=>{
        res.render('admin')
    })

    server.post('/noticias/salvar',(req,res)=>{
        server.controllers.admin.salvarNoticia(server,req,res)
    })
}


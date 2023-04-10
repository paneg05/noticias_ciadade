module.exports=(server)=>{
    server.get('/noticia',(req,res)=>{
        const con=server.database.database()
        const noticiasModel = server.models.noticiasModels

        noticiasModel.getNoticias(con,(err,result)=>{
            res.send({result})
        })

       
      
    })
}
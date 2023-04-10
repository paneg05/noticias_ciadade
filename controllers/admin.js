module.exports.salvarNoticia= function(server,req,res){
    const con=server.database.database()

        let noticia = req.body
        noticia.createdAt= new Date()
        noticia.updatedAt= new Date()

        const noticiasModel = server.models.noticiasModels


        noticiasModel.salvar(con,noticia,()=>{
            res.redirect('/admin')
        })
}
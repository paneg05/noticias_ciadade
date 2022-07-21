
module.exports = (server)=>{

    

    server.get('/',(req,res)=>{
        

        let con = server.database.database()
        let noticiaModel = server.models.noticiasModels

        noticiaModel.getNoticia(con,(err,result)=>{
            res.render('index',{noticia: result})
       
        })
       
       
    })

}

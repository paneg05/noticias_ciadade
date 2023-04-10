
module.exports = (server)=>{
    server.get('/fotos',(req,res)=>{
        

        let con = server.database.database()
        let noticiaModel = server.models.noticiasModels
        let noticia

        con.query('select * from noticia ORDER BY updatedAt desc limit 5;',function(error,result){
           
            console.log(result)
            res.render('fotos',{noticia: result})
        })
        
        con.end((err)=>{
            if(err){
                console.error(`Erro ao fechar a conexão: ${err.message}`)
            }
           })
       
    })
}
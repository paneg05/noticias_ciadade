module.exports= (server)=>{
    server.get('/saude',(req,res)=>{
        let con = server.database.database()

        con.query(
            "select * from noticia",(erro,result)=>{
                res.render('saude',{noticia: result})
            }
        )
        
    })
}
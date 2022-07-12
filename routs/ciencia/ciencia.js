module.exports= (server)=>{
    server.get('/ciencia',(req,res)=>{
        let con = server.database.database()

        con.query("select * from noticia",(erro,result)=>{
            res.render('ciencia',{noticia: result})
        })

        
    })
}
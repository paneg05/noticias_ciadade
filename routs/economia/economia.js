module.exports = (server)=>{
    server.get('/economia',(req,res)=>{
        let con = server.database.database()
        con.query(
            'select * from noticia',(err,result)=>{
                res.render('economia',{noticia: result})
            }
         )
    })
}
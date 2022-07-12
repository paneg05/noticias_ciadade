

module.exports = (server)=>{
    server.get('/internacional',(req,res)=>{
        let con = server.database.database()
        con.query(
            'select * from noticia',(err,result)=>{
                res.render('internacional',{noticia: result})
            }
         )
        
    })
}
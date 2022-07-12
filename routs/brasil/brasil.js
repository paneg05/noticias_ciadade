

module.exports = (server)=>{

    server.get('/brasil',(req,res)=>{
        let con = server.database.database()
        con.query(
            'select * from noticia',(err,result)=>{
                res.render('brasil',{noticia: result})
            }
         )
        
       
    })
}
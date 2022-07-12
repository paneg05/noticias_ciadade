
module.exports = (server)=>{

    

    server.get('/',(req,res)=>{
        

        let con = server.database.database()

        con.query(
           'select * from noticia',(err,result)=>{
               res.render('index',{noticia: result})
           }
        )
       
       
    })

}

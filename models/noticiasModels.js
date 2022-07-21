let noticia = {
    
}

  noticia.getNoticia = (con,callback)=>{
    con.query(
        'select * from noticia',callback)
        
      
}


module.exports=noticia

module.exports = function() {

  this.getNoticias= (con, callback)=> {
    con.query('select * from noticia', callback);
  }

  this.salvar=(con,noticia,callback)=>{
    
    con.query('insert into noticia set ?', noticia,callback)
  }

  return this
}
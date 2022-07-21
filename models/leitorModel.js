let leitor = {

}

leitor.salvar=(email,con,callback)=>{
    con.query(
        'insert into leitores set ?', email,callback
    )
}

leitor.validar=(con,callback)=>{

}

module.exports = leitor
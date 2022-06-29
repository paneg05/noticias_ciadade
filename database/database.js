const mensagem = require('../libs/mensagem')
const mysql = require('mysql2/promise')



module.exports=(query)=>{
    const connection = mysql.createConnection({
        host:'localhost',
        password:"93153626",
        user:'root',
        database:'noticias_cidade'
    
    },()=>{
        let query=''
    }).then(
        mensagem('banco de dados connectado !')
    ).then(
        conn=>conn.query(query).then(
            ([row,field])=>{
                return row
            }
        )
    ).catch(
       (err)=>{
        console.log(err)
       }
    )
}




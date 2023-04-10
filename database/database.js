const mensagem = require('../libs/mensagem')
const mysql = require('mysql2')

let connection =function (){
     return mysql.createConnection({

        host:'localhost',
        password:process.env.DB_PASSWORD,
        user:'root',
        database:'noticias_cidade'
    
    })
} 




module.exports = function(){
    return connection
}





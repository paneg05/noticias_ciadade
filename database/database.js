const mensagem = require('../libs/mensagem')
const mysql = require('mysql2')

let connection =function (){
     return mysql.createConnection({

        host:'localhost',
        password:"93153626",
        user:'root',
        database:'noticias_cidade'
    
    })
} 




module.exports = function(){
    return connection
}
    





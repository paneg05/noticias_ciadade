const mensagem = require('../libs/mensagem')
const connection= require('./database')

let teste = connection('select * from noticia')
   
console.log(teste)







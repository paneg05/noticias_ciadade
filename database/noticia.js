const mensagem = require('../libs/mensagem')
const Sequelize = require('sequelize')
const connection = require('./database')

const noticia = connection.define('noticia',{
    titulo:{
        type: Sequelize.STRING,
        allownull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allownull:false
    },
    noticia:{
        type: Sequelize.TEXT,
        allownull:false
    }
})


noticia.sync({force:false}).then(()=>{
    mensagem(`banco de dados sincronizado !`)
}).catch((err)=>{
    mensagem(`erro ao registrar noticia ${err}`)
})


module.exports = noticia


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
    console.log(`\nbanco de dados sincronizado !\n`)
}).catch((err)=>{
    console.log(`\nerro ao registrar noticia ${err}\n`)
})


module.exports = noticia


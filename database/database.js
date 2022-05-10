const Sequelize = require('sequelize')

const connection = new Sequelize('NOTICIAS_CIDADE','root','93153626',{
    host:'localhost',
    dialect:'mysql'

})


module.exports = connection
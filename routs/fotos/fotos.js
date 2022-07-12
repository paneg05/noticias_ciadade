
module.exports = (server)=>{
    server.get('/fotos',(req,res)=>{
        let con = server.database.database
        res.render('fotos')
    })
}
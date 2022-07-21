module.exports = (server)=>{

    server.post("/leitor/cadastrar",(req,res)=>{
        let email = req.body
   

        let con = server.database.database()
        let emailModel = server.models.leitorModel

        emailModel.salvar(email,con,(error,result)=>{
            res.redirect('/')
        })
        //model
        //salvar
    })


}


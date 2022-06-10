const routs = (server)=>{

    server.get('/',(req,res)=>{
        res.render('index')
    })
    
    server.get('/escrever',(req,res)=>{
        res.render('escrever')
    })
    
    server.get('/brasil',(req,res)=>{
        res.render('brasil')
    })
    
    server.get('/internacional',(req,res)=>{
        res.render('internacional')
    })
    
    server.get('/fotos',(req,res)=>{
        res.render('fotos')
    })
    
    server.get('/economia',(req,res)=>{
        res.render('economia')
    })
    
    server.get('/saude',(req,res)=>{
        res.render('saude')
    })
    
    server.get('/ciencia',(req,res)=>{
        res.render('ciencia')
    })

}


module.exports = routs


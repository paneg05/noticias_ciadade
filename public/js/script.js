const body = document.body






function activeLink(){
    document.querySelectorAll('.navegacao').forEach(item => {
        if(item.getElementsByTagName('a')[0].getAttribute('href')==window.location.pathname) item.classList.add('atual')
    })


}


body.addEventListener('onload',activeLink())



if(window.location.pathname == '/'){
    body.id='tres-colunas'
}else{
    body.id='duas-colunas'
}


//setInterval(() => {
//    window.location.reload()
//}, 2500);
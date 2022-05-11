const body = document.body





function activeLink(){
    document.querySelectorAll('.navegacao').forEach(item => {
        if(item.getElementsByTagName('a')[0].getAttribute('href')==window.location.pathname) item.classList.add('atual')
    })


}


body.addEventListener('onload',activeLink())
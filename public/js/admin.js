function getNames (){
    let entrevistado =document.getElementById('entrevistado').value
    let entrevista = document .getElementById('entrevista').value

    console.log(entrevistado,entrevista)
}







document.getElementById('butao-entrevista').addEventListener('click',getNames)
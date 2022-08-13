//Capturando o form
const btnEnviar = document.getElementById('form-enviar-msg'); 

//Escutando quando tiver umsubmit
btnEnviar.addEventListener('submit', ()=>{
    //Mostrando imagem gif de load
    document.getElementsByClassName("img-load")[0].style.display = "block";
});
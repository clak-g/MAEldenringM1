let boton=document.getElementById('boton')

boton.addEventListener("click",function(evento){

    evento.preventDefault()
   
    let email = document.getElementById("email").value
    let password  = document.getElementById("password").value

    console.log(email, password)
})
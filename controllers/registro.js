import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"
let boton=document.getElementById('boton')

boton.addEventListener("click",function(evento){

    evento.preventDefault()
   
    let email = document.getElementById("email").value
    let password  = document.getElementById("password").value

 
    const auth = getAuth();

    //
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    console.log(userCredential)
    let usuario= document.getElementById("usuario")
    usuario.textContent="bienvenido "+user
    alert("exito en el registro, bienvenido")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("ups fallamos"+errorMessage)

    // ..
  });

  
})
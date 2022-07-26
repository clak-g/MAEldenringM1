import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"
let boton=document.getElementById('boton')

boton.addEventListener("click",function(evento){

    evento.preventDefault()
   
    let email = document.getElementById("email").value
    let password  = document.getElementById("password").value

    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    const auth = getAuth();
})
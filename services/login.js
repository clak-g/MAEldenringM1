import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

let botonLogin= document.getElementById("botonIngresar");
botonLogin.addEventListener("click",function(){
    let email = document.getElementById("correoLogin").value
    let password  = document.getElementById("passwordLogin").value
    const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

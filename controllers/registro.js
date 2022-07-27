import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"
let boton = document.getElementById('boton')
let botonsalir = document.getElementById('boton2')

boton.addEventListener("click", function (evento) {

  evento.preventDefault()

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value


  const auth = getAuth();

  //
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log(userCredential)

      alert("exito en el registro, bienvenido")
      window.location.href = "../registro.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("ups fallamos" + errorMessage)

      // ..
    });

  


})

botonsalir.addEventListener("click", function () {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

})
//Consumir un servicio (POST)
const URI='https://accounts.spotify.com/api/token'
const DATO1="client_id=4dbae502ab3c450cb3b1af62d9f780e4"
const DATO2="client_secret=54dc6bb721b444fa9651a0d273e8cd30"
const DATO3="grant_type=client_credentials"
const PETICION ={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:DATO1+"&"+DATO2+"&"+DATO3

}
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //armando el token
    const TOKEN = respuesta.token_type+" "+respuesta.access_token
    console.log(TOKEN)

})
.catch(function(respuesta){
    console.log(respuesta)
})
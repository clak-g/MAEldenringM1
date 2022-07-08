//receta para consumir API's con JS

//1.PA ONDE VAS
//LA URI DEL SERVICIO

const URI ="https://api.spotify.com/v1/artists/1DdhScDGl9AceKnbvgkFgz/top-tracks?market=US"


//2. A HACER QUE OME?
//CONFIGURO LA PETICIÓN

const PETICION={
    method:'GET',
    headers : {
        Authorization:"Bearer BQAhwuTT7SL7fjIl4fG0q93nYdyArieqJout3vZif9Qg0yRj9a6gbxXGLdISEyMDddJpIFWUcmf2qa5c9Xd2yocM5NpjsB_BO34s1s9k3yo8gNu1s0F6YOO1OSWXH4DqaPY2wv0KyzYUeYXd3Wn9R_c3UNYiE1VTYWhF"
    }
}

//3. ARRANQUE PUES MIJO
//CONSUMA EL API

//promesa (funcion asincrona)
fetch(URI,PETICION)
.then(function(respuesta){
        return respuesta.json()//me aseguro del formato de respuesta
})
.then((respuesta)=>{
    console.log(respuesta)
    console.log(respuesta.tracks)
    respuesta.tracks.forEach((cancion)=>{
        console.log(cancion.preview_url)
    });
})//hago lo que quiera con la respuesta
.catch(function(respuestaError){
    console.log(respuestaError);
})
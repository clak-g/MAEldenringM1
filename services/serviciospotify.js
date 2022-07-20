const URIPOST='https://accounts.spotify.com/api/token'
const DATO1="client_id=4dbae502ab3c450cb3b1af62d9f780e4"
const DATO2="client_secret=54dc6bb721b444fa9651a0d273e8cd30"
const DATO3="grant_type=client_credentials"
const PETICIONPOST ={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:DATO1+"&"+DATO2+"&"+DATO3

}
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //armando el token
    const TOKEN = respuesta.token_type+" "+respuesta.access_token
    console.log(TOKEN)
    const URI ="https://api.spotify.com/v1/artists/1DdhScDGl9AceKnbvgkFgz/top-tracks?market=US"

const URI2 ="https://api.spotify.com/v1/artists/5awFg11m6qCdmOsy8LxEvc/top-tracks?market=US"

//2. A HACER QUE OME?
//CONFIGURO LA PETICIÓN

const PETICION={
    method:'GET',
    headers : {
        Authorization: TOKEN}

}





//3. ARRANQUE PUES MIJO
//CONSUMA EL API

//promesa (funcion asincrona)


fetch(URI2,PETICION)
.then(function(respuesta){
        return respuesta.json()//me aseguro del formato de respuesta
})
.then((respuesta)=>{
    console.log(respuesta)
    console.log(respuesta.tracks)
   // respuesta.tracks.forEach((cancion)=>{
     //   console.log(cancion.preview_url)
    //});
    pintarCanciones(respuesta.tracks);
    })
//hago lo que quiera con la respuesta
.catch(function(respuestaError){
    console.log(respuestaError);
})


//FUNCION PARA PINTAR DATOS
function pintarCanciones(canciones){
    //pasos para pintar/hacer render a en la GUI

    //1.CREO UNA REFERENCIA A LA BASE SOBRE LA CUAL VOY A PINTAR

    let fila=document.getElementById('fila')


    //2. Recorrer los datos que me llegan
    canciones.forEach(function(cancion){
        
        //aplicando TRAVERSING ()
        //2.1  Creando columnas
        let columna = document.createElement("div")
        columna.classList.add("col")

        //2.2 Creando la tarjeta
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","p-3","text-white", "bg-dark", "mb-3")

        //2.3 creando el campo de audio
        let audio = document.createElement("audio");
        
     
        audio.src=cancion.preview_url
        audio.classList.add("w-100");
        audio.setAttribute("controls", "controls")

        //2.4 creando el nombre de la cancion
        let nombreCancion=document.createElement("h5");
        nombreCancion.classList.add("text-center","p-2","font");
        nombreCancion.textContent=cancion.name

    //2.5 creando la foto del album
    let fotoAlbum=document.createElement("img")
    fotoAlbum.classList.add("img-fluid","w-100");
    fotoAlbum.src=cancion.album.images[0].url

    //popularidad

    /*let popularidad = document.createElement("h6");
    popularidad.classList.add("text-center", "fw-bold","text-info")
    popularidad.textContent="popularidad: "+cancion.popularity;

    //track number
    let number = document.createElement("h5");
    number.classList.add("text-center", "fw-bold")
    number.textContent=cancion.track_number*/

        //FINAL DEFINO JERARQUIAS (PADRES E HIJOS)
        tarjeta.appendChild(fotoAlbum)
      //  tarjeta.appendChild(number)
        tarjeta.appendChild(nombreCancion)
        //tarjeta.appendChild(popularidad);
        tarjeta.appendChild(audio);
       
        
       
        columna.appendChild(tarjeta);
        fila.appendChild(columna)

    })


}

})
.catch(function(respuesta){
    console.log(respuesta)
})

//receta para consumir API's con JS

//1.PA ONDE VAS
//LA URI DEL SERVICIO


//receta para consumir API's con JS

//1.PA ONDE VAS
//LA URI DEL SERVICIO

const URI ="https://api.spotify.com/v1/artists/1DdhScDGl9AceKnbvgkFgz/top-tracks?market=US"

const URI2 ="https://api.spotify.com/v1/artists/5awFg11m6qCdmOsy8LxEvc/top-tracks?market=US"

//2. A HACER QUE OME?
//CONFIGURO LA PETICIÓN

const PETICION={
    method:'GET',
    headers : {
        Authorization:"Bearer BQBbCSl5VDBFtdMbS_24QGmMjkGr0_ekb7W5n1XbD3afmQw_pmU8vU3WffgoIvx2c7vYAvcZto6SWCgeb06w3V0dDHRNprNZLkr0c8JwZW_-Jst5DVM7gJMpghwW8vmpFxSxQrUO9VdS_3NI6rDY86_y6pi41UWKK3Jc"
    }
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
        tarjeta.classList.add("card","h-100","shadow")

        //2.3 creando el campo de audio
        let audio = document.createElement("audio");
        
     
        audio.src=cancion.preview_url
        audio.classList.add("w-100");
        audio.setAttribute("controls", "controls")

        //2.4 creando el nombre de la cancion
        let nombreCancion=document.createElement("h5");
        nombreCancion.classList.add("text-center");
        nombreCancion.textContent=cancion.name

    //2.5 creando la foto del album
    let fotoAlbum=document.createElement("img")
    fotoAlbum.classList.add("img-fluid","w-100");
    fotoAlbum.src=cancion.album.images[0].url

    //popularidad

    let popularidad = document.createElement("h6");
    popularidad.classList.add("text-center", "fw-bold","text-info")
    popularidad.textContent="popularidad: "+cancion.popularity;

    //track number
    let number = document.createElement("h5");
    number.classList.add("text-center", "fw-bold")
    number.textContent=cancion.track_number

        //FINAL DEFINO JERARQUIAS (PADRES E HIJOS)
        tarjeta.appendChild(fotoAlbum)
        tarjeta.appendChild(number)
        tarjeta.appendChild(nombreCancion)
        tarjeta.appendChild(popularidad);
        tarjeta.appendChild(audio);
       
        
       
        columna.appendChild(tarjeta);
        fila.appendChild(columna)

    })


}
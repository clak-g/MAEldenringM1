let productos=[
    {
        nombre:"Camiseta",
        precio:20,
        fotos:['https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/1.jpg?alt=media&token=7e9c090b-edff-49a1-9872-628f5f86f2db','https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/2.jpg?alt=media&token=6f357494-44ac-41cc-a606-2bc7848fadf9']
    },
    {
        nombre:"Poster",
        precio:10,
        fotos:['https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/3.jpg?alt=media&token=b564e6b1-32b2-4367-95be-818d01c685ac','https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/4.jpg?alt=media&token=e1e011ff-c816-4993-a447-c507791dba9c']
    },
    {
        nombre:"camiseta",
        precio:20,
        fotos:['https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/5.jpg?alt=media&token=bc8f5226-34a2-41f5-aecc-9c093a875559','https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/6.jpg?alt=media&token=8a8a4ee6-3feb-4744-81d0-a092acaf6cdb']
    },
    {
        nombre:"Poster",
        precio:20,
        fotos:['https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/7.jpg?alt=media&token=8b0376e9-13b9-4d7e-b5dd-9715a27e0d76','https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/8.jpg?alt=media&token=d45d41a6-dc85-4a48-9362-4e8fb1052a77']
    },
    {
        nombre:"Llavero",
        precio:5,
        fotos:['https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/9.jpg?alt=media&token=2b044bd3-8045-439e-8b16-08fc54dcc2d0','https://firebasestorage.googleapis.com/v0/b/eldenring-f97de.appspot.com/o/10.jpg?alt=media&token=749f9858-9281-4585-8345-f8fce3b12749']
    }
    


]

let fila=document.getElementById('fila')

//recorrer el arreglo

productos.forEach(function(producto){

    let columna=document.createElement('div')
    columna.classList.add("col")

    let tarjeta=document.createElement('div')
    tarjeta.classList.add("card","h-100","text-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100","h-100")
    foto.src=producto.fotos[0]

    let nombre=document.createElement('h3')
    nombre.textContent=producto.nombre
    
    let precio=document.createElement('h2')
    precio.classList.add("fw-bold")
    precio.textContent="$"+producto.precio

    //detectando eventos
    foto.addEventListener("mouseover",function(){
        foto.src=producto.fotos[1]
    })
    foto.addEventListener("mouseleave",function(){
        foto.src=producto.fotos[0]
    })


    //padres e hijos

    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    


})
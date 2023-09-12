import { comprarProducto } from "./carrito.js"

/* user login navbar DOM */
const userLogin = document.getElementById("userLogin")

/* productos DOM */
const divProductos = document.getElementById("productos")
export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))




/* funcion constructora de productos */
export const generarProductos = (productos) => {
    productos.forEach(producto => {
        let card = document.createElement("div")

        card.innerHTML = `
        <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Artista: ${producto.artista}</h5>
    <h5 class="card-title">Album: ${producto.album}</h5>
    <b>Precio: $${producto.precio}</b>
    <hr>
    <p id="unidadesCard">Unidades: ${producto.unidades}</p>
    <button id="boton${producto.id}" class="btn btn-primary">COMPRAR</button>
    </div>
    </div>
      `
        divProductos.appendChild(card)
        
        let botonComprar = document.getElementById(`boton${producto.id}`)
        botonComprar.addEventListener("click", ()=>{
            comprarProducto(producto.id)
        })
    });
}


document.addEventListener("DOMContentLoaded", ()=>{
    generarProductos(productosDisponibles)
})




/* // función constructora con método
class Productos {
    constructor(info) {
        this.id = info.id;
        this.artista = info.artista;
        this.album = info.album;
        this.anio = info.anio;
        this.edicion = info.edicion;
        this.precio = info.precio;
        this.unidades = info.unidades;
        this.imagen = info.imagen
        this.vendido = false;
    }
}



// Productos generados mediante función constructora
const producto1 = new Productos({
    id: 01,
    artista: "GZA",
    album: "Liquid Swords",
    anio: 1995,
    edicion: "vinilo",
    precio: 10000,
    unidades: 10,
    imagen: "https://i.scdn.co/image/ab67616d0000b27384b6abc19fb31fb382378bbc"
})

const producto2 = new Productos({
    id: 02,
    artista: "Deep Purple",
    album: "Machine Head",
    anio: 1971,
    edicion: "vinilo",
    precio: 11000,
    unidades: 5,
    imagen: "https://i.scdn.co/image/ab67616d0000b273bc9b44e950d5440ff65ea926"
})

const producto3 = new Productos({
    id: 03,
    artista: "V8",
    album: "Luchando por el Metal",
    anio: 1983,
    edicion: "vinilo",
    precio: 9500,
    unidades: 3,
    imagen: "https://i.scdn.co/image/ab67616d0000b2739e837fba162c12bb3aaba6a3"
})

const producto4 = new Productos({
    id: 04,
    artista: "Pescado Rabioso",
    album: "Pescado 2",
    anio: 1973,
    edicion: "cd",
    precio: 10500,
    unidades: 4,
    imagen: "https://lastfm.freetls.fastly.net/i/u/500x500/a566e0ecf37a24a1c9c575835f7ecebf.jpg"
})

const producto5 = new Productos({
    id: 05,
    artista: "Brea o Muerte",
    album: "Vol1",
    anio: 2023,
    edicion: "vinilo",
    precio: 9000,
    unidades: 3,
    imagen: "https://f4.bcbits.com/img/a4035905023_10.jpg"
})

const producto6 = new Productos({
    id: 06,
    artista: "Black Sabbath",
    album: "Master of Reality",
    anio: 1971,
    edicion: "vinilo",
    precio: 10000,
    unidades: 4,
    imagen: "https://i.scdn.co/image/ab67616d0000b273b7ec2b4b9c76b3b737990a42"
})

//Array de Productos
const catalogo = [producto1, producto2, producto3, producto4, producto5, producto6] */






/* let container = document.getElementById("container")

let row = document.getElementById("row") */


/* catalogo.forEach((item) => {
    let divCard = document.createElement("div");
    divCard.innerHTML = `
    <div class="col-lg-4 col-xl-4">
    <div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Artista: ${item.artista}</h5>
    <h5 class="card-title">Album: ${item.album}</h5>
    <b>Precio: $${item.precio}</b>
    <hr>
    <p id="unidadesCard">Unidades: ${item.unidades}</p>
    <button id="boton${item.id}">COMPRAR</button>
    </div>
    </div>
    </div>
    `
    "<br>"

    divCard.className = "separacion"
    row.append(divCard)


    //boton agregar al carrito
    let unidades = document.getElementById("unidadesCard")

    let boton = document.getElementById(`boton${item.id}`)

    boton.addEventListener("click", () => {
        carrito.push(item)


        unidades.innerHTML = `${item.unidades -= 1}`

        localStorage.setItem("productos", JSON.stringify(carrito))
    })


}) */



// Form Suscripcion




/* let suscripcion = document.getElementById("suscripcion")

let divForm = document.createElement("div")
document.body.append(divForm)

divForm.append(suscripcion)

suscripcion.addEventListener("submit", (e) => {
    e.preventDefault()

})



console.log(catalogo);
console.log(carrito);
 */


import { productosDisponibles } from "./main.js";

const carrito = []

export const comprarProducto = (idProducto) => {
    const producto = productosDisponibles.find((producto) => { producto.id === idProducto })
    const { id, artista, album, anio, edicion, precio, imagen } = producto
    const buscarProducto = carrito.find((producto)=> producto.id === idProducto)
    if (buscarProducto === undefined){
        const nuevoProductoCarrito = {
            id: id,
            nombre: artista,
            album: album,
            anio: anio,
            edicion: edicion,
            precio: precio,
            imagen: imagen,
            unidades: 1

        }
        carrito.push(nuevoProductoCarrito)
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    } else{
        const indexProductoCarrito = carrito.findIndex((producto)=> producto.id === idProducto);
        carrito[indexProductoCarrito].unidades++;
        carrito[indexProductoCarrito].precio = producto.precio * carrito[indexProductoCarrito].unidades;
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    } 
    carrito = JSON.parse(sessionStorage.getItem("carrito"))
    alert(`Compraste el Album: ${album} de ${artista}`)
    console.log(carrito);
}

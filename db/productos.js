export const productos = [
    {
        id: 7,
        artista: "Black Sabbath",
        album: "Heaven and Hell",
        anio: 1980,
        edicion: "cd",
        precio: 5000,
        unidades: 5,
        imagen: "https://i.scdn.co/image/ab67616d0000b273a6c7686870e2761c038958ca"
    },
    {
        id: 8,
        artista: "Danzig",
        album: "Danzig 1",
        anio: 1988,
        edicion: "cd",
        precio: 4000,
        unidades: 3,
        imagen: "https://i.scdn.co/image/ab67616d0000b273bc8d8db760af7b9d0c91747f"
    },
    {
        id: 9,
        artista: "Paul Simon",
        album: "Graceland",
        anio: 1986,
        edicion: "vinilo",
        precio: 11000,
        unidades: 4,
        imagen: "https://i.scdn.co/image/ab67616d0000b273ecd1e6fe12d12402318d747d"
    }
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
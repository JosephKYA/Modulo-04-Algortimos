const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
]

//Uso del método filter

const menosDe100 = productos.filter(num => num.precio <=100)
console.log(menosDe100)

//Uso del método sort

productos.sort((a,b) => a.nombre.localeCompare(b.nombre))

console.log(productos)

//Uso del método map

const arregloNombres = productos.map((a) => a.nombre)
console.log(arregloNombres)

//Productos de electrónica y al mismo tiempo calcular cuánto dinero valen en total
const valorElectronica = productos.reduce((acumulador, producto) => {
    if (producto.categoria === "Electrónica") {
        return acumulador + producto.precio
    }
    return acumulador; 
}, 0)

console.log(`El valor total del inventario de Electrónica es: $${valorElectronica}`);

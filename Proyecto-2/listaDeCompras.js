//Los usuarios deben poder añadir productos a las listas, eliminar productos y ver la lista de compras.

const listaDeCompras = []

function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

//Función para agregar un producto al final de la lista
const agregarProducto = (nombre, precio) => {
    const existe = listaDeCompras.some(
        producto => producto.nombre === nombre
    )
    if (!existe) {
        listaDeCompras.push(new Producto(nombre, precio))
    } else {
        console.log("El producto ya existe en la lista.")
    }
}

//Función para eliminar un Producto
function eliminarProducto(nombre) {
    const indice = listaDeCompras.findIndex(producto => producto.nombre === nombre) 
    if (indice !== -1) {
        listaDeCompras.splice(indice,1)
    }
}

//funcion para ver la lista

const verLista = () => console.log(listaDeCompras)


agregarProducto("papel de baño", 15)
eliminarProducto('papel de baño')
verLista()
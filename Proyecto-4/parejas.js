const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Comparamos las iniciales
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }

        // Avanzamos los dos punteros
        inicio++;
        siguiente++;
    }

    return null;
}

console.log(encontrarPareja(invitados));
// ["Carlos", "Cecilia"]
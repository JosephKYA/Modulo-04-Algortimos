//viajes.js

// Array para guardar los destinos
// Se usa const porque el arreglo no se va a reemplazar, solo se le agregan datos

export const destinos= []

//Funcion para registrar un destino de viaje

export const registrarDestino = (destino, fecha, transporte, alojamiento, personas) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        alojamiento: alojamiento,
        personas, personas,
        costo: calcularCosto(destino, transporte, alojamiento, personas)
    }
    destinos.push(nuevoViaje)
}

//Funcion para calcular el costo del viaje
export const calcularCosto = (destino, transporte, alojamiento, personas) => {
    let costoBase = 0

    //Costo por destino
    if (destino === 'Paris') {
        costoBase = 500
    } else if (destino === 'Londres') {
        costoBase = 400
    } else if (destino === 'New York') {
        costoBase  = 600;
    } else {
        costoBase = 300
    }

    //Costo adicional por tipo de transporte
    if (transporte === 'Avion') {
        costoBase += 200
    } else if (transporte  === 'Tren') {
        costoBase += 100
    } else if (transporte  === 'Autobús') {
        costoBase += 50
    } 

    // Costo adicional por alojamiento
    if (alojamiento === 'Hotel') {
        costoBase += 300
    } else if (alojamiento === 'Hostal') {
        costoBase += 150
    } else if (alojamiento === "Airbnb") {
        costoBase += 200
    }

    //Descuento si viajan 4 o más personas
    if  (personas >= 4) {
        costoBase -=100
    }

    return costoBase
}

export const mostrarItinerario = () => {
    for (let i = 0; i< destinos.length; i++) {
        const viaje = destinos[i]

        console.log(`Destino: ${viaje.destino}`)
        console.log(`Fecha: ${viaje.fecha}`)
        console.log(`Transporte: ${viaje.transporte}`)
        console.log(`Alojamiento: ${viaje.alojamiento}`)
        console.log(`Personas ${viaje.personas}`)
        console.log(`Costo total estimado: $${viaje.costo}`)
    } 
}





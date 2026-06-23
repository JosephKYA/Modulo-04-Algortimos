import { registrarDestino, mostrarItinerario } from "./viajes.js";

const iniciarApp = () => {
    // Registros
    registrarDestino("Paris", "2024-06-15", "Avión", "Hotel", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", "Hostal", 4);
    registrarDestino("New York", "2024-08-10", "Avión", "Airbnb", 3);

    mostrarItinerario();
};

iniciarApp();
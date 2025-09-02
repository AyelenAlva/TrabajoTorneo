import { Deporte } from "./Deporte.js";
export class Futbol extends Deporte {
    constructor() {
        super("Fútbol", 11);
    }
    validar(equipo) {
        // Reglas mínimas: al menos 1 jugador y como máximo 11
        return equipo.cantidad > 0 && equipo.cantidad <= this.maxPorEquipo;
    }
}

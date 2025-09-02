import { Deporte } from "./Deporte.js";
export class Basquet extends Deporte {
    constructor() {
        super("Básquet", 5);
    }
    validar(equipo) {
        // Reglas mínimas: al menos 1 jugador y como máximo 5
        return equipo.cantidad > 0 && equipo.cantidad <= this.maxPorEquipo;
    }
}

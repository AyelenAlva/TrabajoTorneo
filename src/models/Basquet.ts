import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";


export class Basquet extends Deporte {
constructor() {
super("Básquet", 5);
}


validar(equipo: Equipo): boolean {
// Reglas mínimas: al menos 1 jugador y como máximo 5
return equipo.cantidad > 0 && equipo.cantidad <= this.maxPorEquipo;
}
}
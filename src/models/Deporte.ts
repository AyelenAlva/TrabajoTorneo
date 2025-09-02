import { Equipo } from "./Equipo.js";


export abstract class Deporte {
constructor(
public readonly nombre: string,
public readonly maxPorEquipo: number
) {}


/** valida el equipo según el deporte (polimorfismo). */
abstract validar(equipo: Equipo): boolean;


toString(): string {
return `${this.nombre} (máx ${this.maxPorEquipo} por equipo)`;
}
}
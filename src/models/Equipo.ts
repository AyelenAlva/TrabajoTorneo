import type { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";


export class Equipo implements ICompetidor {
// Encapsulamiento: el contenedor de jugadores es privado
#jugadores: Map<string, Jugador> = new Map();


constructor(
public readonly id: string,
public nombre: string
) {}


agregarJugador(jugador: Jugador): void {
if (this.#jugadores.has(jugador.id)) {
throw new Error(`El jugador con id ${jugador.id} ya pertenece al equipo ${this.nombre}.`);
}
this.#jugadores.set(jugador.id, jugador);
}


listarIntegrantes(): string[] {
return Array.from(this.#jugadores.values()).map(j => j.toString());
}


/** Cantidad de jugadores del equipo (getter encapsulado) */
get cantidad(): number {
return this.#jugadores.size;
}


/** Acceso controlado a la colección (solo lectura) */
get jugadores(): ReadonlyArray<Jugador> {
return Array.from(this.#jugadores.values());
}


toString(): string {
return `Equipo ${this.nombre} (jugadores: ${this.cantidad})`;
}
}
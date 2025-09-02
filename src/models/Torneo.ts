import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Partido } from "./Partido.js";


export class Torneo implements IIdentificable {
#partidos: Map<string, Partido> = new Map();


constructor(
public readonly id: string,
public nombre: string
) {}


programarPartido(partido: Partido): void {
if (this.#partidos.has(partido.id)) {
throw new Error(`Ya existe un partido con id ${partido.id}.`);
}
this.#partidos.set(partido.id, partido);
}


listarPartidos(): string[] {
return Array.from(this.#partidos.values()).map(p => p.toString());
}


buscarPartido(id: string): Partido | undefined {
return this.#partidos.get(id);
}
}
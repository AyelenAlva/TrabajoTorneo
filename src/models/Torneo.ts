import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Partido } from "./Partido.js";

export class Torneo implements IIdentificable {
  // Mapa privado para almacenar los partidos
  #partidos: Map<string, Partido> = new Map();

  constructor(
    public readonly id: string,
    public nombre: string
  ) {}

  /**
   * Agrega un partido al torneo
   */
  programarPartido(partido: Partido): void {
    if (this.#partidos.has(partido.id)) {
      throw new Error(`Ya existe un partido con id ${partido.id}.`);
    }
    this.#partidos.set(partido.id, partido);
  }

  /**
   * Devuelve un array de strings con la descripción de los partidos
   */
  listarPartidos(): string[] {
    return Array.from(this.#partidos.values()).map(p => p.toString());
  }

  /**
   * Devuelve un array de objetos Partido (para iterar y jugar)
   */
  obtenerPartidos(): Partido[] {
    return Array.from(this.#partidos.values());
  }

  /**
   * Buscar un partido por su id
   */
  buscarPartido(id: string): Partido | undefined {
    return this.#partidos.get(id);
  }
}

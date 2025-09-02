import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
import { Resultado } from "./Resultado.js";

export class Partido implements IIdentificable {
  public resultado?: Resultado;

  constructor(
    public readonly id: string,
    public readonly local: Equipo,
    public readonly visitante: Equipo,
    public readonly deporte: Deporte
  ) {
    if (local.id === visitante.id) {
      throw new Error("Un partido no puede tener el mismo local y visitante.");
    }
  }

  /** Jugar el partido solo si ambos equipos cumplen el deporte */
  jugar(resultado: Resultado): void {
    const validoLocal = this.deporte.validar(this.local);
    const validoVisit = this.deporte.validar(this.visitante);

    if (!validoLocal || !validoVisit) {
      throw new Error(
        `No se puede jugar: equipos no válidos para ${this.deporte.nombre} (local válido: ${validoLocal}, visitante válido: ${validoVisit}).`
      );
    }

    this.resultado = resultado;
  }

  /** Devuelve el partido como string, mostrando posiciones de los jugadores */
  toString(): string {
    const jugadoresLocal = this.local.jugadores.map(j => j.posicion).join(", ");
    const jugadoresVisit = this.visitante.jugadores.map(j => j.posicion).join(", ");
    const cabecera = `[${this.deporte.nombre}] ${this.local.nombre} (${jugadoresLocal}) vs ${this.visitante.nombre} (${jugadoresVisit})`;
    return this.resultado ? `${cabecera} → ${this.resultado.toString()}` : cabecera;
  }
}

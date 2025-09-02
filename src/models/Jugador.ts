import type { IIdentificable } from "../interfaces/IIdentificable.js";


export class Jugador implements IIdentificable {
constructor(
public readonly id: string,
public nombre: string,
public edad: number,
public posicion?: string
) {}


toString(): string {
const pos = this.posicion ? ` - ${this.posicion}` : "";
return `${this.nombre} (${this.edad})${pos}`;
}
}
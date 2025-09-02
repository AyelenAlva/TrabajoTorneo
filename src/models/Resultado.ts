export class Resultado {
constructor(
public golesLocal: number,
public golesVisitante: number
) {
if (!Number.isInteger(golesLocal) || !Number.isInteger(golesVisitante)) {
throw new Error("Los goles deben ser enteros.");
}
if (golesLocal < 0 || golesVisitante < 0) {
throw new Error("Los goles no pueden ser negativos.");
}
}


get ganador(): "local" | "visitante" | "empate" {
if (this.golesLocal === this.golesVisitante) return "empate";
return this.golesLocal > this.golesVisitante ? "local" : "visitante";
}


toString(): string {
return `${this.golesLocal} - ${this.golesVisitante}`;
}
}
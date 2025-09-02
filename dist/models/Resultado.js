export class Resultado {
    constructor(golesLocal, golesVisitante) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
        if (!Number.isInteger(golesLocal) || !Number.isInteger(golesVisitante)) {
            throw new Error("Los goles deben ser enteros.");
        }
        if (golesLocal < 0 || golesVisitante < 0) {
            throw new Error("Los goles no pueden ser negativos.");
        }
    }
    get ganador() {
        if (this.golesLocal === this.golesVisitante)
            return "empate";
        return this.golesLocal > this.golesVisitante ? "local" : "visitante";
    }
    toString() {
        return `${this.golesLocal} - ${this.golesVisitante}`;
    }
}

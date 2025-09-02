export class Deporte {
    constructor(nombre, maxPorEquipo) {
        this.nombre = nombre;
        this.maxPorEquipo = maxPorEquipo;
    }
    toString() {
        return `${this.nombre} (máx ${this.maxPorEquipo} por equipo)`;
    }
}

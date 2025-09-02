export class Jugador {
    constructor(id, nombre, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
    toString() {
        const pos = this.posicion ? ` - ${this.posicion}` : "";
        return `${this.nombre} (${this.edad})${pos}`;
    }
}

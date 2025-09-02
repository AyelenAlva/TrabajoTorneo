export class Partido {
    constructor(id, local, visitante, deporte) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
        if (local.id === visitante.id) {
            throw new Error("Un partido no puede tener el mismo local y visitante.");
        }
    }
    /** Jugar el partido solo si ambos equipos cumplen el deporte */
    jugar(resultado) {
        const validoLocal = this.deporte.validar(this.local);
        const validoVisit = this.deporte.validar(this.visitante);
        if (!validoLocal || !validoVisit) {
            throw new Error(`No se puede jugar: equipos no válidos para ${this.deporte.nombre} (local válido: ${validoLocal}, visitante válido: ${validoVisit}).`);
        }
        this.resultado = resultado;
    }
    toString() {
        const cabecera = `[${this.deporte.nombre}] ${this.local.nombre} vs ${this.visitante.nombre}`;
        return this.resultado ? `${cabecera} → ${this.resultado.toString()}` : cabecera;
    }
}

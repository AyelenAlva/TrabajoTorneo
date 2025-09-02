var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Equipo_jugadores;
export class Equipo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        // Encapsulamiento: el contenedor de jugadores es privado
        _Equipo_jugadores.set(this, new Map());
    }
    agregarJugador(jugador) {
        if (__classPrivateFieldGet(this, _Equipo_jugadores, "f").has(jugador.id)) {
            throw new Error(`El jugador con id ${jugador.id} ya pertenece al equipo ${this.nombre}.`);
        }
        __classPrivateFieldGet(this, _Equipo_jugadores, "f").set(jugador.id, jugador);
    }
    listarIntegrantes() {
        return Array.from(__classPrivateFieldGet(this, _Equipo_jugadores, "f").values()).map(j => j.toString());
    }
    /** Cantidad de jugadores del equipo (getter encapsulado) */
    get cantidad() {
        return __classPrivateFieldGet(this, _Equipo_jugadores, "f").size;
    }
    /** Acceso controlado a la colección (solo lectura) */
    get jugadores() {
        return Array.from(__classPrivateFieldGet(this, _Equipo_jugadores, "f").values());
    }
    toString() {
        return `Equipo ${this.nombre} (jugadores: ${this.cantidad})`;
    }
}
_Equipo_jugadores = new WeakMap();

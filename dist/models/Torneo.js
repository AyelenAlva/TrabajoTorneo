var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Torneo_partidos;
export class Torneo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        _Torneo_partidos.set(this, new Map());
    }
    programarPartido(partido) {
        if (__classPrivateFieldGet(this, _Torneo_partidos, "f").has(partido.id)) {
            throw new Error(`Ya existe un partido con id ${partido.id}.`);
        }
        __classPrivateFieldGet(this, _Torneo_partidos, "f").set(partido.id, partido);
    }
    listarPartidos() {
        return Array.from(__classPrivateFieldGet(this, _Torneo_partidos, "f").values()).map(p => p.toString());
    }
    buscarPartido(id) {
        return __classPrivateFieldGet(this, _Torneo_partidos, "f").get(id);
    }
}
_Torneo_partidos = new WeakMap();

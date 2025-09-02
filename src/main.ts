import { Jugador } from "./models/Jugador.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Resultado } from "./models/Resultado.js";
import { Partido } from "./models/Partido.js";
import { Torneo } from "./models/Torneo.js";


console.log("TORNEOS");


const j1 = new Jugador("j1", "Ana", 22, "Delantera");
const j2 = new Jugador("j2", "Beto", 25, "Defensor");
const j3 = new Jugador("j3", "Carla", 24, "Mediocampo");
const j4 = new Jugador("j4", "Damián", 21, "Base");
const j5 = new Jugador("j5", "Ema", 23, "Escolta");
const j6 = new Jugador("j6", "Facu", 20, "Alero");


const tigres = new Equipo("e1", "Tigres");
const leones = new Equipo("e2", "Leones");
const halcones = new Equipo("e3", "Halcones");


[tigres, leones].forEach(eq => {
eq.agregarJugador(j1); 
});



leones.agregarJugador(j2);
leones.agregarJugador(j3);


try {
leones.agregarJugador(j2); // duplicado dentro del mismo equipo → debe fallar
} catch (e) {
console.log("Esperado (duplicado en equipo):", (e as Error).message);
}


halcones.agregarJugador(j4);
halcones.agregarJugador(j5);
halcones.agregarJugador(j6);


const futbol = new Futbol();
const basquet = new Basquet();


const deportes = [futbol, basquet];
for (const dep of deportes) {
console.log(`Validación ${dep.nombre} → Tigres:${dep.validar(tigres)} | Halcones:${dep.validar(halcones)}`);
}


const torneo = new Torneo("t1", "Torneo Interclubes");


const p1 = new Partido("p1", tigres, leones, futbol);
const p2 = new Partido("p2", halcones, tigres, basquet); // Tigres no es válido para básquet (tiene >0 pero puede exceder cupos si agregamos más)


torneo.programarPartido(p1);
torneo.programarPartido(p2);


console.log("Partidos programados:");
for (const linea of torneo.listarPartidos()) console.log(" - ", linea);


// 6) Jugar partidos (solo si equipos cumplen el deporte)
const r1 = new Resultado(2, 1);
p1.jugar(r1);
console.log("Resultado p1:", p1.toString());


try {
  leones.agregarJugador(j2); // duplicado dentro del mismo equipo → debe fallar
} catch (e) {
  console.log("Esperado (duplicado en equipo):", (e as Error).message);
}

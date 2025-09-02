import { Jugador } from "./models/Jugador.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Resultado } from "./models/Resultado.js";
import { Partido } from "./models/Partido.js";
import { Torneo } from "./models/Torneo.js";

console.log("=== TORNEO INTERCLUBES ===\n");

// --------------------
// 1️⃣ Crear jugadores
// --------------------

// Fútbol - Equipo A
const jugadoresA = [
  new Jugador("j1", "Gabriel Batistuta", 55, "Delantero"),
  new Jugador("j2", "Juan Román Riquelme", 46, "Centrocampista"),
  new Jugador("j3", "Carlos Tevez", 40, "Delantero"),
  new Jugador("j4", "Javier Zanetti", 51, "Defensor"),
  new Jugador("j5", "Roberto Ayala", 52, "Defensor"),
  new Jugador("j6", "Ariel Ortega", 50, "Delantero"),
  new Jugador("j7", "Diego Simeone", 54, "Centrocampista"),
  new Jugador("j8", "Esteban Cambiasso", 44, "Centrocampista"),
  new Jugador("j9", "Martín Demichelis", 43, "Defensor"),
  new Jugador("j10", "Hernán Crespo", 49, "Delantero"),
  new Jugador("j11", "Pablo Aimar", 45, "Centrocampista"),
];

// Fútbol - Equipo B
const jugadoresB = [
  new Jugador("j12", "Andrés Iniesta", 40, "Centrocampista"),
  new Jugador("j13", "Xavi Hernández", 45, "Centrocampista"),
  new Jugador("j14", "Gerard Piqué", 38, "Defensor"),
  new Jugador("j15", "Carles Puyol", 47, "Defensor"),
  new Jugador("j16", "David Villa", 43, "Delantero"),
  new Jugador("j17", "Iker Casillas", 44, "Portero"),
  new Jugador("j18", "Sergio Busquets", 36, "Centrocampista"),
  new Jugador("j19", "Fernando Torres", 41, "Delantero"),
  new Jugador("j20", "Jordi Alba", 36, "Defensor"),
  new Jugador("j21", "Cesc Fàbregas", 38, "Centrocampista"),
  new Jugador("j22", "Pedro Rodríguez", 38, "Delantero"),
  new Jugador("j23", "Jugador Extra", 30, "Delantero"), // extra para cumplir validación
];

// Básquet - Equipo C
const jugadoresC = [
  new Jugador("j24", "Facundo Campazzo", 33, "Base"),
  new Jugador("j25", "Luka Doncic", 26, "Escolta"),
  new Jugador("j26", "Nikola Jokic", 30, "Pívot"),
  new Jugador("j27", "Giannis Antetokounmpo", 30, "Ala-pívot"),
  new Jugador("j28", "Kawhi Leonard", 34, "Alero"),
];

// Básquet - Equipo D
const jugadoresD = [
  new Jugador("j29", "Stephen Curry", 37, "Base"),
  new Jugador("j30", "LeBron James", 40, "Alero"),
  new Jugador("j31", "Anthony Davis", 32, "Pívot"),
  new Jugador("j32", "James Harden", 36, "Escolta"),
  new Jugador("j33", "Jayson Tatum", 27, "Alero"),
];

// --------------------
// 2️⃣ Crear equipos
// --------------------
const equipoA = new Equipo("e1", "Equipo A");
const equipoB = new Equipo("e2", "Equipo B");
const equipoC = new Equipo("e3", "Equipo C");
const equipoD = new Equipo("e4", "Equipo D");

// --------------------
// 3️⃣ Agregar jugadores a equipos
// --------------------
jugadoresA.forEach(j => equipoA.agregarJugador(j));
jugadoresB.forEach(j => equipoB.agregarJugador(j));
jugadoresC.forEach(j => equipoC.agregarJugador(j));
jugadoresD.forEach(j => equipoD.agregarJugador(j));

// --------------------
// 4️⃣ Mostrar integrantes de cada equipo
// --------------------
const mostrarEquipo = (equipo: Equipo) => {
  console.log(`--- Integrantes de ${equipo.nombre} ---`);
  equipo.jugadores.forEach((j, i) =>
    console.log(`${i + 1}. Jugador: ${j.nombre}, Edad: ${j.edad}, Posición: ${j.posicion}`)
  );
  console.log(`Cantidad de integrantes: ${equipo.jugadores.length}\n`);
};

[equipoA, equipoB, equipoC, equipoD].forEach(mostrarEquipo);

// --------------------
// 5️⃣ Crear deportes
// --------------------
const futbol = new Futbol();
const basquet = new Basquet();

// --------------------
// 6️⃣ Validaciones de equipos
// --------------------
console.log("--- Validaciones de deporte (polimorfismo) ---");
const validar = (eq: Equipo) =>
  `Equipo ${eq.nombre} válido para fútbol? ${futbol.validar(eq) ? "Válido" : "No apto"}\n` +
  `Equipo ${eq.nombre} válido para básquet? ${basquet.validar(eq) ? "Válido" : "No apto"}`;

[equipoA, equipoB, equipoC, equipoD].forEach(eq => console.log(validar(eq)));
console.log("\n");

// --------------------
// 7️⃣ Crear torneo y programar partidos
// --------------------
const torneo = new Torneo("t1", "Torneo Interclubes");

const partidoFutbol = new Partido("p1", equipoA, equipoB, futbol);
const partidoBasquet = new Partido("p2", equipoC, equipoD, basquet);

torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

console.log("--- Lista de partidos programados ---");
torneo.listarPartidos().forEach(p => console.log(p));
console.log("\n");

// --------------------
// 8️⃣ Jugar partidos automáticamente
// --------------------
for (const partido of torneo.obtenerPartidos()) {
  if (!partido.deporte.validar(partido.local) || !partido.deporte.validar(partido.visitante)) {
    console.log(`No se puede jugar el partido ${partido.deporte.nombre} entre ${partido.local.nombre} y ${partido.visitante.nombre}: equipos no válidos.\n`);
    continue;
  }

  // generar puntaje aleatorio
  const resultado = partido.deporte.nombre === "Fútbol"
    ? new Resultado(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5))
    : new Resultado(Math.floor(Math.random() * 101), Math.floor(Math.random() * 101));

  partido.jugar(resultado);

  console.log(`--- Partido ${partido.deporte.nombre} ---`);
  console.log(partido.toString());

  const ganador = resultado.golesLocal > resultado.golesVisitante
    ? partido.local.nombre
    : resultado.golesVisitante > resultado.golesLocal
      ? partido.visitante.nombre
      : "Empate";

  console.log(`Ganador: ${ganador}\n`);
}

// --------------------
// 9️⃣ Mostrar lista final de partidos del torneo
// --------------------
console.log("--- Lista final de partidos del Torneo ---");
torneo.listarPartidos().forEach(p => console.log(p));

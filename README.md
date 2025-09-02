#   TP Torneos (TypeScript)

Este proyecto modela un **torneo deportivo** aplicando conceptos de POO en **TypeScript**, incluye:

- **Interfaces** (`IIdentificable`, `ICompetidor`)
- **Clases** (`Jugador`, `Equipo`, `Resultado`, `Partido`, `Torneo`)
- **Encapsulamiento** (colección privada de jugadores en `Equipo`)
- **Herencia y clases abstractas** (`Deporte`, `Futbol`, `Basquet`)
- **Polimorfismo** (cada deporte valida equipos de forma distinta)
- **Validaciones y reglas**:
  - No se permiten jugadores duplicados en un mismo equipo.
  - Un partido no puede tener el mismo local y visitante.
  - Un partido solo puede jugarse si ambos equipos cumplen con el deporte.



## Instalación

1. Clonar el repositorio o copiar la carpeta del proyecto:
   ```bash
   git clone https://github.com/AyelenAlva/TrabajoTorneo.git
   cd tp-torneo 

   npm run dev 

# Pruebas  en main.ts

- En src/main.ts se incluyen ejemplos de uso:
- Crear jugadores y equipos de fútbol y básquet.
- Validar equipos según el deporte (polimorfismo con validar()).
- Programar partidos en un torneo.
- Jugar partidos y mostrar resultados.
- Verificar reglas y restricciones (jugador duplicado, mismo local/visitante, equipos inválidos).

## Salida esperada (aproximada):

=== TORNEO INTERCLUBES ===

--- Integrantes de Equipo A ---
1. Jugador: Gabriel Batistuta, Edad: 55, Posición: Delantero
2. Jugador: Juan Román Riquelme, Edad: 46, Posición: Centrocampista
3. Jugador: Carlos Tevez, Edad: 40, Posición: Delantero
4. Jugador: Javier Zanetti, Edad: 51, Posición: Defensor
5. Jugador: Roberto Ayala, Edad: 52, Posición: Defensor
6. Jugador: Ariel Ortega, Edad: 50, Posición: Delantero
7. Jugador: Diego Simeone, Edad: 54, Posición: Centrocampista
8. Jugador: Esteban Cambiasso, Edad: 44, Posición: Centrocampista
9. Jugador: Martín Demichelis, Edad: 43, Posición: Defensor
10. Jugador: Hernán Crespo, Edad: 49, Posición: Delantero
11. Jugador: Pablo Aimar, Edad: 45, Posición: Centrocampista
Cantidad de integrantes: 11

--- Integrantes de Equipo B ---
1. Jugador: Andrés Iniesta, Edad: 40, Posición: Centrocampista
2. Jugador: Xavi Hernández, Edad: 45, Posición: Centrocampista
3. Jugador: Gerard Piqué, Edad: 38, Posición: Defensor
4. Jugador: Carles Puyol, Edad: 47, Posición: Defensor
5. Jugador: David Villa, Edad: 43, Posición: Delantero
6. Jugador: Iker Casillas, Edad: 44, Posición: Portero
7. Jugador: Sergio Busquets, Edad: 36, Posición: Centrocampista
8. Jugador: Fernando Torres, Edad: 41, Posición: Delantero
9. Jugador: Jordi Alba, Edad: 36, Posición: Defensor
10. Jugador: Cesc Fàbregas, Edad: 38, Posición: Centrocampista
11. Jugador: Pedro Rodríguez, Edad: 38, Posición: Delantero
12. Jugador: Jugador Extra, Edad: 30, Posición: Delantero
Cantidad de integrantes: 12

--- Integrantes de Equipo C ---
1. Jugador: Facundo Campazzo, Edad: 33, Posición: Base
2. Jugador: Luka Doncic, Edad: 26, Posición: Escolta
3. Jugador: Nikola Jokic, Edad: 30, Posición: Pívot
4. Jugador: Giannis Antetokounmpo, Edad: 30, Posición: Ala-pívot
5. Jugador: Kawhi Leonard, Edad: 34, Posición: Alero
Cantidad de integrantes: 5

--- Integrantes de Equipo D ---
1. Jugador: Stephen Curry, Edad: 37, Posición: Base
2. Jugador: LeBron James, Edad: 40, Posición: Alero
3. Jugador: Anthony Davis, Edad: 32, Posición: Pívot
4. Jugador: James Harden, Edad: 36, Posición: Escolta
5. Jugador: Jayson Tatum, Edad: 27, Posición: Alero
Cantidad de integrantes: 5

--- Validaciones de deporte (polimorfismo) ---
Equipo Equipo A válido para fútbol? Válido
Equipo Equipo A válido para básquet? No apto
Equipo Equipo B válido para fútbol? No apto
Equipo Equipo B válido para básquet? No apto
Equipo Equipo C válido para fútbol? Válido
Equipo Equipo D válido para fútbol? Válido
Equipo Equipo D válido para básquet? Válido

--- Lista de partidos programados ---
[Fútbol] Equipo A (Delantero, Centrocampista, Delantero, Defensor, Defensor, Delantero, Centrocampista, Centrocampista, Defensor, Delantero, Centrocampista) vs Equipo B (Centrocampista, Centrocampista, Defensor, Defensor, Delantero, Portero, Centrocampista, Delantero, Defensor, Centrocampista, Delantero, Delantero)
[Básquet] Equipo C (Base, Escolta, Pívot, Ala-pívot, Alero) vs Equipo D (Base, Alero, Pívot, Escolta, Alero)


No se puede jugar el partido Fútbol entre Equipo A y Equipo B: equipos no válidos.

[Básquet] Equipo C (Base, Escolta, Pívot, Ala-pívot, Alero) vs Equipo D (Base, Alero, Pívot, Escolta, Alero) → 25 - 12
Ganador: Equipo C
--- Lista final de partidos del Torneo ---
[Fútbol] Equipo A (Delantero, Centrocampista, Delantero, Defensor, Defensor, Delantero, Centrocampista, Centrocampista, Defensor, Delantero, Centrocampista) vs Equipo B (Centrocampista, Centrocampista, Defensor, Defensor, Delantero, Portero, Centrocampista, Delantero, Defensor, Centrocampista, Delantero, Delantero)
[Básquet] Equipo C (Base, Escolta, Pívot, Ala-pívot, Alero) vs Equipo D (Base, Alero, Pívot, Escolta, Alero) → 25 - 12

# Conceptos aplicados

## Interfaces:

- IIdentificable: asegura que todas las entidades tengan un id.
- ICompetidor: asegura que un competidor (equipo) tenga un nombre y un método listarIntegrantes().

## Clases:

- Jugador: representa a un jugador con id, nombre, edad y posición opcional.
- Equipo: implementa ICompetidor, mantiene jugadores en una colección privada (Map).
- Resultado: almacena goles y determina ganador.
- Partido: enfrenta dos equipos bajo un deporte, valida reglas y puede jugarse.
- Torneo: administra partidos programados.
- Herencia / Abstracción:
- Deporte: clase abstracta con método validar(equipo).
- Futbol: máximo 11 jugadores.
- Basquet: máximo 5 jugadores.

## Encapsulamiento:

- Los jugadores en Equipo están en una colección privada (#jugadores).

## Polimorfismo:
- Cada deporte redefine validar() con sus reglas.
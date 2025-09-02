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

 TORNEOS 
Esperado (duplicado en equipo): El jugador con id j2 ya pertenece al equipo Leones.
Validación Fútbol → Tigres:true | Halcones:true
Validación Básquet → Tigres:true | Halcones:true
Partidos programados:
 -  [Fútbol] Tigres vs Leones
 -  [Básquet] Halcones vs Tigres
Resultado p1: [Fútbol] Tigres vs Leones → 2 - 1
Esperado (validación por deporte): No se puede jugar: equipos no válidos para Básquet (local válido: true, visitante válido: false).
Esperado (local=visitante): Un partido no puede tener el mismo local y visitante.
==== FIN PRUEBAS ====

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
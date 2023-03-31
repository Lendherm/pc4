import { checkWin, comprobarEmpate } from "./game.js";
import { elemns, cambiarjugador, partida } from "./dom.js";
// Definir los jugadores y su respectivo símbolo
// const player1 = "X";
// const player2 = "O";

// // Variables para llevar la cuenta de los turnos y el jugador actual
// let turnoActual = 1;
// let jugadorActual = player1;

// Obtener todas las celdas del tablero
let elemento = elemns(".cell")
// TODO Agregar un evento de click a cada celda con la funcion 'marcarCelda'

elemento.forEach( celda => celda.addEventListener("click", () => marcarCelda(celda) ))

// funcion para marcar la celda
function marcarCelda(celda) {
  console.log(celda)
  // Comprobar si la celda ya ha sido marcada
  if (celda.innerHTML !== "") {
    alert("Esta celda ya ha sido marcada. Por favor seleccione otra.");
    return;
  }

  // TODO Marcar la celda con el símbolo del jugador actual
  celda.innerHTML = partida.jugadorActual;

  // TODO Comprobar si el jugador actual ha ganado, si es así, mostrar el mensaje de ganador en el elemento con id 'result' y terminar la ejecución de la función (ver ejemplo de los condicionales de arriba y abajo que terminan con return)

  if (checkWin(partida.jugadorActual)) {
    document.querySelector('#result').innerHTML = `El ganador es ${partida.jugadorActual}`
    return;
  }

  // Comprobar si hay empate
  if (comprobarEmpate()) {
    document.getElementById("result").innerHTML = "¡Empate!";
    return;
  }

    // // Cambiar al siguiente jugador
    // turnoActual++;
    // jugadorActual = turnoActual % 2 === 0 ? player2 : player1;
    cambiarjugador()
  
}

// let reset = reiniciar()

// Función para comprobar si hay empate

// let empate = comprobarEmpate()










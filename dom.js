const player1 = "X";
const player2 = "O";

let turnoActual = 1;
let jugadorActual = player1;

export const partida = {
    player1: "X",
    player2: "O",
    turnoActual: 1,
    jugadorActual: player1
}

const elemento = document.querySelectorAll(".cell");

export const elemns  = (elems) => document.querySelectorAll(elems); 



// const marcarCelda = (celda) => {

//     console.log(celda)

//     if (celda.innerHTML !== "") {
//         alert("Esta celda ya ha sido marcada. Por favor seleccione otra.");
//         return;
//       }
// }

//      celda.innerHTML = jugadorActual;

// Este evento se ejecuta cuando se hace click en el botón de reiniciar, lo que hay aqui es una funcion flecha, escribe el codigo dentro del bloque como con otra funcion normal
export const reiniciar= document.getElementById("reset").addEventListener("click", () => {
    // TODO Reiniciar las variables de turnos y jugador actual
    partida.turnoActual = 1;
    partida.jugadorActual = player1;
  
    // TODO Reiniciar el contenido de todas las celdas
  elemento.forEach( celda => celda.innerHTML = "")
  
  
    // TODO Reiniciar el contenido del elemento de id 'result
    document.querySelector("#result").innerHTML = "";
  });
  
// Cambiar al siguiente jugador

export function cambiarjugador () { 
    partida.turnoActual++;
    partida.jugadorActual = partida.turnoActual % 2 === 0 ? partida.player2 : partida.player1;
  }
  
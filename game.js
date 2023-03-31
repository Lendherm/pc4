const elemento = document.querySelectorAll(".cell");

// Función para comprobar si el jugador actual ha ganado

export function checkWin(player) {
    // Comprobar las combinaciones ganadoras
    if (
      elemento[0].innerHTML === player &&
      elemento[1].innerHTML === player &&
      elemento[2].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[3].innerHTML === player &&
      elemento[4].innerHTML === player &&
      elemento[5].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[6].innerHTML === player &&
      elemento[7].innerHTML === player &&
      elemento[8].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[0].innerHTML === player &&
      elemento[3].innerHTML === player &&
      elemento[6].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[1].innerHTML === player &&
      elemento[4].innerHTML === player &&
      elemento[7].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[2].innerHTML === player &&
      elemento[5].innerHTML === player &&
      elemento[8].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[0].innerHTML === player &&
      elemento[4].innerHTML === player &&
      elemento[8].innerHTML === player
    ) {
      return true;
    } else if (
      elemento[2].innerHTML === player &&
      elemento[4].innerHTML === player &&
      elemento[6].innerHTML === player 
    ) {
      return true;
    }
  
    // Si ninguna combinación ganadora se cumple, retornar false
    return false;


  }

export function comprobarEmpate() {
    for (let i = 0; i < elemento.length; i++) {
      if (elemento[i].innerHTML === "") {
        return false;
      }
    }
  
    return true;
  }
  
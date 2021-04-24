let random = () => Math.floor(Math.random() * 3);

function startGame(eleccionUsuario) {
  let eleccionMaquina = OPCIONES[random()];
  let resultado = document.getElementById('resultado');

  if (eleccionUsuario === piedra && eleccionMaquina === tijera) {
    resultado.textContent = `Tu elección fue ${eleccionUsuario} y tu rival eligió ${eleccionMaquina}. !Woo Hoo Ganastes Felicidades`;
  } else if (eleccionUsuario === papel && eleccionMaquina === piedra) {
    resultado.textContent = `Tu elección fue ${eleccionUsuario} y tu rival eligió ${eleccionMaquina}. !Woo Hoo Ganastes Felicidades`;
  } else if (eleccionUsuario === tijera && eleccionMaquina === papel) {
    resultado.textContent = `Tu elección fue ${eleccionUsuario} y tu rival eligió ${eleccionMaquina}. !Woo Hoo Ganastes Felicidades`;
  } else if (eleccionUsuario === eleccionMaquina) {
    resultado.textContent = `Tu elección fue ${eleccionUsuario} y tu rival eligió ${eleccionMaquina}. Por lo tanto es un empate, vamos una vez más`;
  } else {
    resultado.textContent = `Tu elección fue ${eleccionUsuario} y tu rival eligió ${eleccionMaquina}. Asi que perdistes, lo siento`;
  }
}

const OPCIONES = ['piedra', 'papel', 'tijera'];
const PIEDRA = document.getElementById('piedra');
const PAPEL = document.getElementById('papel');
const TIJERA = document.getElementById('tijera');

PIEDRA.addEventListener('click', () => startGame('piedra'));
PAPEL.addEventListener('click', () => startGame('papel'));
TIJERA.addEventListener('click', () => startGame('tijera'));

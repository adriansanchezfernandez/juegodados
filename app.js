/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let puntos, puntosRonda, jugadorActivo, random;

let dice = document.querySelector('.dado');

let current0 = document.getElementById('current-0');
let current1 = document.querySelector('#current-1');
let score0 = document.querySelector('#score-0');
let score1 = document.querySelector('#score-1')

let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
let btnNew = document.querySelector('.btn-new')

current0.innerText = 0;
current1.innerText = 0;
score0.innerText = 0;
score1.innerText = 0;
inicio();

dice.style.display = "none";

btnRoll.addEventListener('click', tirarDado)
btnHold.addEventListener('click', sumarPuntos)

function tirarDado() {
    random = Math.floor(Math.random() * 6) + 1;
    dice.style.display = "block";
    dice.src = `dice-${random}.png`;
    if (random != 1) {
        puntosRonda += random;
        document.querySelector(`#current-${jugadorActivo}`).innerText = puntosRonda

    } else if (random == 1) {


        nextPlayer()

    }
    console.log(puntosRonda);
}



function sumarPuntos() {


    puntos[jugadorActivo] = puntos[jugadorActivo] + puntosRonda;
    document.querySelector(`#score-${jugadorActivo}`).innerText = puntos[jugadorActivo];
    if (puntos[jugadorActivo] >= 10) {

        document.querySelector('#name-' + jugadorActivo).innerText = '¡¡GANADOR!!';
        dice.style.display = "none";
        document.querySelector('.player-' + jugadorActivo + '-panel').classList.add('winner');
        document.querySelector('.player-' + jugadorActivo + '-panel').classList.remove('active')
    } else {

        nextPlayer();
    }


}

function nextPlayer() {
    puntosRonda = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector(`#current-${jugadorActivo}`).innerText = puntosRonda;
    dice.style.display = "none";
    jugadorActivo == 1 ? jugadorActivo = 0 : jugadorActivo = 1;
}



btnNew.addEventListener('click', inicio)

function inicio() {

    
    puntos = [0, 0];
    puntosRonda = 0;
    jugadorActivo = 0;
    
    current0.innerText = 0;
    current1.innerText = 0;
    score0.innerText = 0;
    score1.innerText = 0;
    
    document.querySelector('#name-0').innerText = 'JUGADOR 1';
    document.querySelector('#name-1').innerText = 'JUGADOR 2';
    dice.style.display = "none";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    jugadorActivo == 0 ? jugadorActivo = 1 : jugadorActivo = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}
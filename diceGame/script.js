// DOM AND EVENTS EXAMPLES🙂
// PROJECT: 'ROLL THE DICE'😎😎

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];

// function for swith player
function switchPly() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rollling the dice
btnRoll.addEventListener('click', function () {

    // Generate a random number
    const randomNum = Math.trunc(Math.random() * 6) + 1;

    // print the Random number with dice
    diceEl.src = `dice-${randomNum}.png`;
    diceEl.classList.remove('hidden');

    // print the random number in current score
    if (randomNum !== 1) {
        currentScore += randomNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
        switchPly();
    }


});


// Hold the Dice
btnHold.addEventListener('click', function () {

    // Add the current score to the Total score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    // check if the player won the game
    if (score[activePlayer] >= 10) {

        document.getElementById(`name--${activePlayer}`).textContent = `'You Won'🙂`;

        // Add class to the winner to change the Background color
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        // Remove the switch player Background color  
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        // Hiding the Dice and the Roll and Hold buttons
        btnHold.classList.add('hidden');
        btnRoll.classList.add('hidden');
        diceEl.classList.add('hidden');
    }

    else {
        // Switch player after hold the dice
        switchPly();
    }

});


// Resetting the Game
btnNew.addEventListener('click', function () {
    score[0, 0] = 0;
    currentScore = 0;
    activePlayer = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

});


///////////////     MADE WITH ❤️ FROM NI3      ////////////////////
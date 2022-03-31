
const btn = document.querySelector('#btn');
btn.addEventListener('click', playGame);



function playGame() {
   const playerChoice = prompt("Choose your weapon!", "rock/paper/scissors").toLowerCase();
   const computerChoice = computerPlay();
   console.log(playRound(playerChoice, computerChoice));
}

const computerPlay = function () {
   const options = ['rock', 'paper', 'scissors'];
   const randomChoice = options[Math.floor(Math.random() * options.length)];
   return randomChoice;
}

const playRound = function (playerChoice, computerChoice) {
   if (playerChoice === computerChoice) return `It's a tie! The computer also chose ${playerChoice}`
   else if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'rock' && computerChoice === 'scissors')) return `You win! The computer chose ${computerChoice}!`;
   else if ((playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'paper')) return `You lose! The computer chose ${computerChoice}!`;
}
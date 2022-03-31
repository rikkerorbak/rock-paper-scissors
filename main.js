const computerPlay = function () {
   let options = ['rock', 'paper', 'scissors'];
   let randomChoice = options[Math.floor(Math.random() * options.length)];
   return randomChoice;
}

const setPlayerChoice = function() {
   return playerChoice = prompt("Choose your weapon!", "rock/paper/scissors")
}

const playRound = function(playerChoice, computerChoice) {
   
}

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
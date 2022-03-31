const computerPlay = function () {
   let options = ['rock', 'paper', 'scissors'];
   let randomChoice = options[Math.floor(Math.random() * options.length)];
   return randomChoice;
}

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
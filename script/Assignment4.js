const target = Math.floor(Math.random() * 10);
let guess = null;

function guessNumberGame (){
while (guess !== target) {
// console.log(`target: ${target}. {guess}`);
guess = parseFloat(prompt("Make a guess"));
if (guess > target) {
    console.log (`${guess} is too high, try again`)
}
if (guess < target) {
    console.log (`${guess} is too low, try again`)
}
}
console.log(`the correct number was ${target}. Congrats you win!`);
}

guessNumberGame()
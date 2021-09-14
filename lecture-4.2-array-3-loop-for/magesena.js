//Nosso Jogo
//Saber Mais: https://www.w3schools.com/js/js_random.asp (JavaScript Random)
//Saber Mais: https://www.w3schools.com/js/js_math.asp (JavaScript Math Object)

let priscilaGame = [7, 21, 33, 45, 56, 60];

//console.log(priscilaGame.length + ' números');

//Sorteou os números
let firstNumber = Math.floor(Math.random() * 60 +1);
let secondNumber = Math.floor(Math.random() * 60 +1);
let thirdNumber = Math.floor(Math.random() * 60 +1);
let fourthNumber = Math.floor(Math.random() * 60 +1);
let fifthNumber = Math.floor(Math.random() * 60 +1);
let sixthNumber = Math.floor(Math.random() * 60 +1);

//Armazenou os Números Sorteados
let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

//Conferir o jogo
let numbersOfHits = 0;

for(let index = 0; index < megaSenaNumbers.length; index = index + 1) {
  let drawnNumber = megaSenaNumbers[index];

  for(let gameIndex = 0; gameIndex < priscilaGame.length; gameIndex += 1) {
    let priscilaNumber = priscilaGame[gameIndex];
    
    if(drawnNumber ===priscilaGame) {
      numbersOfHits += 1;
    }
  }
}
console.log('Jogo da Mega Sena: ' + megaSenaNumbers);
console.log('Jogo da Pri: ' + priscilaGame);
console.log('Ela acertou: ' + numbersOfHits);
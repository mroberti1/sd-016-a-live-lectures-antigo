//Nosso Jogo
//Saber Mais: https://www.w3schools.com/js/js_random.asp (JavaScript Random)
//Saber Mais: https://www.w3schools.com/js/js_math.asp (JavaScript Math Object)
//Funções começam com Verbo

// 1. Gerar um número aleatório

function generateRandomNumbers() {
 let randomNumber =  Math.floor(Math.random() * 60 + 1);
 return randomNumber
}

// 2. Gerar um jogo (sortear os Números)

// 3. Conferir um jogo e compará-lo com o resultado da mega sena
// Eu preciso do meu jogo
// Eu preciso do resultado
// Contar quantos pontos eu acertei no meu jogo

function checkMegaSenaResult(result, game) {

  //Conferir o jogo

let numbersOfHits = 0;

for(let index = 0; index < result.length; index = index + 1) {
  let drawnNumber = result[index];

  for(let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
    let priscilaNumber = game[gameIndex];
    
    if(drawnNumber === priscilaGame) {
      numbersOfHits += 1;
    }
  }
}
  return numbersOfHits;

}
let priscilaGame = [7, 21, 33, 45, 56, 60];

//console.log(priscilaGame.length + ' números');

//Sorteou os números

function generateGame() {
  let megaSenaDraw = [];
  
  // Mecanismo para sortear 6 números
  for(let index = 0; index <= 6; index += 1) {
    // Pegar um número aleatório
    let randomNumber = generateRandomNumbers();

    // Colocar esse número aleatório no array megaSenaDraw
    megaSenaDraw.push(randomNumber);
  }
  return megaSenaDraw;
} 

let firstNumber = generateRandomNumbers();
let secondNumber = generateRandomNumbers();
let thirdNumber = generateRandomNumbers();
let fourthNumber = generateRandomNumbers();
let fifthNumber = generateRandomNumbers();
let sixthNumber = generateRandomNumbers();

//Armazenou os Números Sorteados
let megaSenaNumbers = generateRandomNumbers();

let bernardoGame = generateGame(); // Faz um surpresinha

console.log('Jogo da Mega Sena: ' + megaSenaNumbers);
console.log('Joga da Pri: ' + priscilaGame);
console.log('Joga do Bê: ' + bernardoGame);
console.log('A Pri teve ' + checkMegaSenaResult(megaSenaNumbers, priscilaGame) +' acertos.');
console.log('O Bê teve ' + checkMegaSenaResult(megaSenaNumbers, bernardoGame) +' acertos.');
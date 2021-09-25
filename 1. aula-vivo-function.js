// Função => 
// Pode ou não ter uma entrada
// Faz algo - Ação
// Pode ou não devolver algma coisa para quem chamou ela
// Reaproveitar o Código
// Começam com nome de verbos
// () Colocar os parametros para imprimir na tela

//1. Chamar a Função e passar um Parâmetro
// function printGreeting() {
//   console.log('Olá!');
// }
// printGreeting();// Para chamar (Executar) a função => Imprime 'Olá"

// 
// OU
// function printGreeting(name) {
//   console.log('Olá!' + name);
// }
// //2. Executar a função => nome dela + ()
// printGreeting(' Luiz Ricardo'); // Parametro () => Imprime Luiz Ricardo

// Juntar tudo
// function printGreeting(name) {
//   console.log('Olá, ' + name);
// }
// let luizVariable = 'Luis Ricardo!';
// printGreeting(luizVariable);

// 3. Função para gerar (Criar) a String do Comprimento e retorna para que chamou => return + let greeting  

// // Gerar a Sring do Cumprimento com palavra mágica RETURN a string para quem chamou
// function makeGreeting(name) {
//   return 'E aí ' + name + '? Tudo bem com você?'
// }
// console.log(makeGreeting('Leandro'));

// OU

// let greeting = makeGreeting('Leandro');
// console.log(greeting);

// 4. Função Classica => SOMA

// function sum(num1, num2) {
//   return num1 * num2
// }
// sum(2 ,2);


// 5. Encapsular na função = Reutilizar o código

function canDrive(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

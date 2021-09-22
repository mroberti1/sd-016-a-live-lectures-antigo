//3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

//Valor esperado no retorno da função: 6 .

function indiceMenor(array) {
  let indiceMenor = [0]
  for (let indice in array) {
    
    if (array[indiceMenor] > array[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3])); //Posição 6 => -3
//Parte II - Funções

//Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
// function verificaPalindrome(word) {
//   for (index in word) {
//     if (word[index] != word[(word.length - 1) - index]) {
//       return false
//     }
//   }
//   return true
// }
  //OU
  function verificaPalindrome(String) {
    let reverse = String.split('').reverse().join('');
    if (reverse === String) {
      return true;
    } else {
      return false
    }
  }
  console.log(verificaPalindrome('arara')); // true
  console.log(verificaPalindrome('desenvolvimento')); // false
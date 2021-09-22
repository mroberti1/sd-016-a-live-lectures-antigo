// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .

//Valor esperado no retorno da função: Fernanda .

// function maiorPalavra(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let indice in palavras) {
//     if (maiorPalavra.length < palavras[indice].length) {
//       maiorPalavra = palavras[indice];
//     }
//   }
//   return maiorPalavra;
// }
// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

  // OU

  function maiorTamanhoDoNome (nomes) {
    let maiorNome = nomes[0];
    for (let indice in nomes) {

      if (maiorNome.length < nomes[indice].length) {
        maiorNome = nomes[indice];
      }
    }
    return maiorNome;
  }
  console.log(maiorTamanhoDoNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
  
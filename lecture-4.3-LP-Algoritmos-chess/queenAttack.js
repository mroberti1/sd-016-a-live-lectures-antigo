// Plano Cartesiano coluna X linha Y

//1. Identifica a Posição da Rainha
let linhaRainha = 4;
let colunaRainha = 4;

//2. Identificar a Posição do Oponente
let linhaOponente = 2;
let colunaOponente = 7;

//Variável utilizada para verificar se a rainha pode ou não atacar o oponente
let rainhaPodeAtacar = false;

//3. Verificar se o oponente pode ou não ser atacado na mesma linha OU coluna
if((linhaRainha === linhaOponente) || (colunaRainha === colunaOponente)) {
  rainhaPodeAtacar = true;
}

//4. Verifica se pode atacar o oponente na diagpnal superior direita

for(let iSUpDir = 1; iSUpDir < 8; iSUpDir += 1) {
  let linhaAtualRainha = linhaRainha + iSUpDir;
  let colunaAtualRainha = colunaRainha +iSUpDir;

  if((linhaAtualRainha  > 8) || (colunaAtualRainha > 8)) { //Limite do tabuleiro
    break
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)) {
    rainhaPodeAtacar = true;
  }
}

//5. Verifica se pode atacar o oponente na diagpnal superior esquerda

for(let iSupEsq = 1; iSupEsq < 8; iSupEsq += 1) {
  let linhaAtualRainha = linhaRainha + iSupEsq;
  let colunaAtualRainha = colunaRainha + iSupEsq;

  if((linhaAtualRainha  > 8) || (colunaAtualRainha < 1)) { //Limite do tabuleiro
    break
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)) {
    rainhaPodeAtacar = true;
  }
}

//6. Verifica se pode atacar o oponente na diagpnal inferior esquerdo

for(let iInfEsq = 1; iInfEsq < 8; iInfEsq += 1) {
  let linhaAtualRainha = linhaRainha - iInfEsq;
  let colunaAtualRainha = colunaRainha  - iInfEsq;

  if((linhaAtualRainha  < 1) || (colunaAtualRainha < 1)) { //Limite do tabuleiro
    break
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)) {
    rainhaPodeAtacar = true;
  }
}

//7. Verifica se pode atacar o oponente na diagpnal inferior direito

for(let iInfDir = 1; iInfDir < 8; iInfDir += 1) {
  let linhaAtualRainha = linhaRainha - iInfDir; //Diminuiu Linha
  let colunaAtualRainha = colunaRainha  + iInfDir; //Aumentou Coluna

  if((linhaAtualRainha  < 1) || (colunaAtualRainha > 8)) { //Limite do tabuleiro
    break
  }

  if((linhaOponente === linhaAtualRainha) && (colunaOponente === colunaAtualRainha)) {
    rainhaPodeAtacar = true;
  }
}

console.log('Ataque bem sucedido?', rainhaPodeAtacar);
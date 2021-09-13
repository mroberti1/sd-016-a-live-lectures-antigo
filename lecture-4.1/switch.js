/*
Saber Mais: https://www.w3schools.com/js/js_switch.asp

Quando não usar:
- Em intervalos de variável de nota, de tanto a tanto = A
- Em comparação não é indicado 
- Quando tiver muitas opções para um caso

- Estrutura de Condição
*/

let weekDay = 4;

switch (weekDay) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda-feira');
    break;
  case 3:
    console.log('Terça-feira');
    break;
  case 4:
    console.log('Quarta-feira');
    break;
  case 5:
    console.log('Quinta-feira');
    break;
  case 6:
    console.log('Sexta-feira');
    break;
  case 7:
    console.log('Sábado');
    break;
  
  default:
    console.log('Não existe esse dia, ainda :)');
}

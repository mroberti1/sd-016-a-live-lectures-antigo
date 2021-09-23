let person = {
  name: 'Eduardo',
  lastName: 'Miyazaki',
  age: 19,
  canDrive: true,
  movies: ['A Origem', 'A Procura da Felicidade'],
  favoriteNumbers: [8, 6],

  adress: {
    street: 'Rua XYZ',
    number: 234,
    city: 'Mogi das Cruzes'
  }
};

// Existe duas maneiras de acessar propriedades(chaves - keys) de um objeto

// 1. Notação por ponto (dot notation) = > obeject.property 

//console.log(person.lastName);

// 2. Notação de colchetes [bracket Notation] => object['property

//console.log(person['lastName']);

// for (let key in person) {
//   //console.log(key);
  
//  // console.log(person[key]); // Imprime os valores de cada chave do obj. Acessa de forma dinâmica, baseado em key

// }

// Adicionar novas entradas (propriedades) no objeto

person.favoriteAlbuns = ['Let it be', 'Abbey Road'];

// Pode usar push no Array e não no objeto
person.favoriteAlbuns.push('barões da pisadinha');

person['favoriteColor'] = 'Azul';
console.log(person);
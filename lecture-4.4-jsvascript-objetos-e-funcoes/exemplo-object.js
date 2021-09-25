let person = {
  name: 'Mauricio',
  lastName:  'Moraes Roberti',
  age: 41 + ' anos',
  canDrive: true,
  movies: ['La Casa de Papel', 'The Walking Dead'], // ARRAY
  favoriteNumbers: [14, 29], // ARRAY

  // Um outro objeto dentro de Person
  address: {
    street: 'Rua X',
    number: 44,
    city: 'São Paulo'
  }
}
//console.log(person);

// Existem duas notações para ACESSAR PROPRIEDADES (chaves) de um Objeto

//1. Notação por . (dot notation) => object.proprerty
// Acessar uma propriedade do Objeto
//  console.log(person.name);
//  console.log(person.lastName);

 // Acessar uma propriedade do Objeto, que está dentro de outro Objeto
 //console.log(person.address.street);

 // 2. Notação por COLCHETES [ ] (bracket notation) => object['property']
 //console.log(person['canDrive']);

 //Quando não se sabe o que tem Objeto => Faz um FOR

 // for(let key in person) {
//  console.log(person[key]); // person[key] => Imprime os valores das Chaves
// }

// Adicionar novas propriedades ao Objeto.
person.favoriteAlbuns = ['Let it be', 'Abbey Road'];

person.favoriteAlbuns.push('Barões da Pisadinha'); // Push só Add no Array, não é do objeto
  // OU
person['favoriteColo'] = 'Azul';
console.log(person);
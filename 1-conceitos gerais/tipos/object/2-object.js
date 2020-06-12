const user = {
    name: 'Marcos',
    lastName: 'Albuquerque'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergea propriedades de objetos
Object.assign(user, {fullName: `${user.name} ${user.lastName}`}); // Por questões de imutabilidade, não é o mais recomendado

console.log('\nAdiciona a propriedade fullName do objeto user:', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos:', Object.assign({}, user, {age: 21}));

console.log(user); // Note que a propriedade age, criada acima, não está alocado no objeto user

// Previne todas as alterações dentro de um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes'; // Deny
delete newObj.foo;      // Deny
newObj.bar = 'foo';     // Deny

console.log('\nVariável newObj após as alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Marcos'};
Object.seal(person);

person.name = 'Marcos Felipe';
delete person.name; // Deny
person.age = 21;    // Deny

console.log('\nVariável person após as alterações:', person);
const myNumber = 34.364246;

// Transforma um número em uma string
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${numberAsString}`);

// Retorna um número com casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com casas decimais: ${fixedTwoDecimals}`);

// Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('34.36'));

// Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('42.46'));
// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna uma array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'Outro Texto');
console.log(`\nSubstituição de valor: ${replacedText}`);

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`\nA última letra de uma string: ${lastChar}`);

const allWithoutLastChart = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última: ${allWithoutLastChart}`);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segundo letra até a última: ${secondToEnd}`);

// Retorna N caracteres a parir de sua posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`\nAs duas primeiras letras são: ${twoCharsBeforeFirstPos}`);
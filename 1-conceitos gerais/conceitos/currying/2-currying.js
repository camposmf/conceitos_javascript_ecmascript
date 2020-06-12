// E a capacidade de transformar uma função com N parâmetros em uma única com função com 1 parâmetro

function soma(number){ // Essa função recebe um parâmetro number que recebe uma nova função que irá somar com outro parâmetro
    return function(number2){
        return number + number2;
    }
}

// Primeiro passo o valor para o primeiro parâmetro pegando a função como parâmetro
const soma2 = soma(2);

// Passo o valor para a segunda função
console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
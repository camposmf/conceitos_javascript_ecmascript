// Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modifica-lo.

let loggedIn = false;

function callIfAuthenticated (fn){
    return !!loggedIn && fn();
}

function sum (a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 4)));

loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 4)));

loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 4)));

// O decorator controla a função e a executação.
// Neste caso, ele só irá executar a função que recebe por parâmetro se estiver autenticado.
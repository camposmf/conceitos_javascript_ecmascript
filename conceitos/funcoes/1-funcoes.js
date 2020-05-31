function getName(){
    return 'Marcos Felipe Albuquerque Campos';
}

function logFn(fn){  // Recebe uma função por paramêtro
    console.log(fn); // Dá uma console.log no retorno dessa função
}

const logFnResult = logFn; // Atribuindo uma função de primeira classe para uma variável

logFnResult(getName); // Recebe uma outra variável como paramêtro
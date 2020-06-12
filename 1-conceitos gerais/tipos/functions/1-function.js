// Forma mais básica - Função são objetos que podem ser chamado.
function fn(){
    return 'Code here!!';
}

// Arrow Functions
const arrowFn1 = () => 'Code here!!!'; // O return já está na arrow function implicitamente

const arrowFn2 = () => {
    // Para mais de uma expressão
    return 'Code here!!';
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades S2';

console.log(arrowFn1());
console.log(fn.prop);
// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);    // Executará a função fn
handleFnExecution();        // Não executará a função fn
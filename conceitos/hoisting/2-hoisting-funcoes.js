// O hoisting de função é elevada como um todo (Como é possível ver no exemplo)

function fn(){
    // Por mais que a função log seja criada só depois, por conta do hoisting, eu posso acessa-la

    log('Hoisting de função');

    function log(value){
        console.log(value);
    }

    // Mas é uma boa prática declarar uma função antes de usa-la.
}

fn();

// EXEMPLO DO HOISTING
// function fn(){
//     function log(value){
//         console.log(value);
//     }

//     log('Hoisting de função');
// }
// HOISTING: Levantar ou suspender algo

// O hoisting de variável só eleva sua criação e não em sua atribuição
function fn(){
    console.log(text); // Isso resultará em um valor undefined, pois a variável já foi criada, mas não há nenhum valor nela.

    var text = 'texto';

    console.log(text);
}

fn();

// EXEMPLO DO HOISTING
// function fn(){
//     let text;

//     console.log(text);

//     text = 'texto';

//     console.log(text);
// }
// Variável de escopo
var teste = 'exemplo'; 

(() =>{
    console.log(`Valor dentro da função: "${teste}"`); // Não reconhece a variável teste

    if(true){
        var teste = 'exemplo'; // Essa variável, por não respeitar o espoco de bloco, se torna a variável de função local
        console.log(`Valor dentro do if: "${teste}"`);
    }

    console.log(`Valor após a execução do if: "${teste}"`);
})(); // Função imediata (Só executa!)
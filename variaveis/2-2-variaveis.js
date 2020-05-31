(() =>{
    let teste = 'valor função'
    console.log(`Valor dentro da função: "${teste}"`); // Referencia a variável de escopo de função

    if(true){
        let teste = 'valor if';
        console.log(`Valor dentro do if: "${teste}"`); // Referência a variável de escopo de bloco {}
    }

    console.log(`Valor após a execução do if: "${teste}"`); // Referencia a variável de escopo de função
})(); // Função imediata (Só executa!)
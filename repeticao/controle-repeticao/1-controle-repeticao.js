// break
console.log('Exemplo de utilização do [BREAK]');

var index = 0;

while(true){
    index ++;

    if(index > 2){
        break;
    }

    console.log(index);
}

// continue
console.log('\nExemplo de utilização do [CONTINUE]');

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

for(let index = 0; index < arr.length; index++){
    const element = arr[index];

    if(element % 2 === 0){ // Está pulando os números pares
        continue;
    }

    console.log(element);
}
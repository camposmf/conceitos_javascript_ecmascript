/* 

for ([expressão inicial]; [condição]; [incremento]){
    //code here!!
}

*/

const array = ['one', 'two', 'three'];

for(let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(`Elemento #${index}: ${element}.`);
}

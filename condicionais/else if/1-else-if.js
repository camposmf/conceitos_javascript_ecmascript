/* 

if(condition) {
    // Code here!!
} else if (condition) {
    // Code here!!
}

*/

const array = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nElse if');
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é par.`);
    } else if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    } else if (item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});

console.log('\nIf');
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O número ${item} é par.`);
    }

    if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3.`);
    }

    if(item % 5 === 0){
        console.log(`O número ${item} é divisível por 5.`);
    }
});
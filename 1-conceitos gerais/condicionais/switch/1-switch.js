/* 
    switch (expressão){
        case valor1:
            [break;]
        case valorN:
            [break;]

        default:
            [break;]
    }
*/

const fruit = 'goiaba';

switch (fruit){
    case 'banana':
        console.log('R$: 3.00 / kg');
    break;
    case 'mamão':
        console.log('R$: 4,99 / kg');
    break;
    case 'goiaba':
    case 'pera':
        console.log('R$: 2,00 / kg');
    break;
    default:
        console.log('Produto não existe no estoque.');
    break;
}
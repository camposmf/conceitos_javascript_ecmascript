// Um pouco mais sobre a variável const (CONSTANTE)

const name = 'Marcos';

// Não podemos alterar o valor;.
// name = 'Marcos';

const user = {
    name: 'Marcos'
};

// Mas se for um objeto, podemos trocar o valor das suas propriedades.
user.name = 'Felipe';

// Não podemos fazer o objeto "apontar" para outro objeto.
// user = {
//     name: 'Marcos'
// };

const persons = ['Marcos', ' Maria', ' Nathalia', ' Ygor'];

// Podemos adicionar novos itens
persons.push(' Alessandra');

// Podemos remover itens
persons.pop();

// Podemos alterar diretamente
persons[2] = ' Nathalia DaROCHA';

console.log(`\nArray após as alterações: ${persons}`);
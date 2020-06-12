// O objetivo desse parttern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessária.

function pessoa (){
    if(!pessoa.instance) { // Caso ela não tenha sido instanciada, retornará a instancia desta função
        pessoa.instance = this;
    }

    return pessoa.instance;
}

const p = pessoa.call({ name: 'Nathalia da Rocha' });

const p2 = pessoa.call({ name: 'Ygor Oliveira' });

console.log(p);
console.log(p2);

// Por mais que se passe outro valor, a partir do momento em a função foi instanciada, ela não recebe outro conteúdo.

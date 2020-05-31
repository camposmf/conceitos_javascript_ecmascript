this.name = 'Nome do contexto da criação';

const getNameArrowFn = () => this.name; // O this em arrow functions pega sempre o contexto de escopo global.


function getName (){
    return this.name; // o this em função 'normais' sempre irá referênciar o contexto em que ela foi executada.
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
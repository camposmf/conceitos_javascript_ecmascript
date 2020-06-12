// É um pattern que possibilita organizarmos melhor o nosso código sem a necessidade de expor as variáveis globais.

let name = 'default';

function setName(newName) {
    name = newName;
}

function getName(){
    return name;
}

module.exports = {
    setName,
    getName
};
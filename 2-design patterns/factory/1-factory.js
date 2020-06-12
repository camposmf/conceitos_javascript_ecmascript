// Todas as funções que retornam um objeto sem a necessidade de chama-las com o NEW são consideradas funções Factory (Fábrica);

function notUsingFacotyDesignPattern() {
    this.name = 'Marcos',
    this.lastName = 'Alquerque'
}

// Não é uma factory
const user = new notUsingFacotyDesignPattern();
console.log(user);

function usingFactoryDesignPattern(customProperties) {
    return {
        name: 'Marcos',
        lastName: 'Campos',
        ...customProperties
    }
}

// Factory
const factoryUser = usingFactoryDesignPattern({ name: 'Maria', age: 19 });
console.log(factoryUser);

// Perceba que o design factory não retorna um novo objeto.
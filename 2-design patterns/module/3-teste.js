class Person {
    #name = ''
    constructor(initialName){
        this.#name = initialName;
    }

    set nome(newName){
        this.#name = newName;
    }

    get nome(){
        return console.log(`Seu nome é ${this.#name}`);
    }
}

const person = new Person();

console.log(person);

person.nome = 'foo';

person.nome;
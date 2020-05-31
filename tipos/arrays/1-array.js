const users = ['Marcos', 'Maria', 'Nathalia', 'Ygor'];

const genrer = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const people = [
    {
        name   : 'Marcos Albuquerque',
        age    : 21,
        genrer : genrer.MAN
    },
    {
        name   : 'Maria Helena',
        age    : 19,
        genrer : genrer.WOMAN
    },
    {
        name   : 'Ygor Oliveira',
        age    : 18,
        genrer : genrer.MAN
    },
    {
        name   : 'Nathalia daRocha',
        age    : 17,
        genrer : genrer.WOMAN
    }
    
]

// Retorna a quantidade de itens de um array
console.log('Items:', people.length);

// Verificar se é um array
console.log('\nA variável people é um array:', Array.isArray(people));

console.log('\n');
people.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const womens = people.filter(person => person.genrer === genrer.WOMAN);
console.log('\nNova lista apenas com mulheres:', womens);

// Retornar um novo array
const peopleWithCourse = people.map(person => {
    people.course = 'Introdução ao JavaScript com EcmaScript';
    return people;
});

console.log('\nPessoas com a adição do course:', peopleWithCourse);

// Transformar array em outro tipo
const totalAge = people.reduce((age, person) => { 
    age += person.age;
    return age;
}, 0); // Esse 0 indica que o valor age iniciará com com 0

console.log('\nSoma da idade das pessoas:', totalAge);

const totalEvenAges = people
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges);
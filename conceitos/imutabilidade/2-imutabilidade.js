// Esse exemplo é para exemplificar o conceito de imutabilidade.

// Um array de objetos
const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
]

function getApprovedStudents(studentsList){ // Essa função tem como responsabilidade filtrar os alunos com nota igual ou maior que 7
    return studentsList.filter(student => student.grade >= 7);
}

// Amostra do novo valor a partir da função
console.log('Alunos Aprovados: ');
console.log(getApprovedStudents(students));

// Valor original (Imutável)
console.log('\nLista de Alunos: ')
console.log(students);
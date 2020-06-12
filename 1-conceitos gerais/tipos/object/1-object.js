let user = {
    name: 'Marcos'
}
// console.log(user);

// Alterando a propriedade de um objeto
user.name = 'outro nome 1';
// console.log(user);

user['name'] = 'outro nome 2';
// console.log(user);

const prop = 'name';
user[prop] = 'outro nome 3';

// console.log(user);

// Criando uma propriedade
user.lastName = 'Joaquina';

// Deletando uma propridade
delete user.name;

console.log(user);
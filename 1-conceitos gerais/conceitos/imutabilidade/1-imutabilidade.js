// Basicamente, a imutalibidade faz que não possamos atualizar um valor que tenha sido declaro, só a partir de um outro objeto é que podemos atualiza-lo.

// Um objeto
const user = { 
    name: 'Marcos',
    lastname: 'Albuquerque'
}

// Essa função irá acrescentar uma nova propriedade ao objeto user
function getUserWithFullName(user){ 
    return {
        ...user, // Com o SPREAD OPERATOR, eu consigo pegar todo o valor do objeto
        fullname: `${user.name}, ${user.lastname}`
    };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
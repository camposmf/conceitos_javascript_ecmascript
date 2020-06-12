// A instância (SUBCRIBER) mantém uma coleção de objetos (OBSERVERS) e notifica todos os items da coleção quando ocorrem mudança no estado.

class Observable{
    constructor(){
        this.observables = []; // Defino uma coleção
    }

    // Obrigatório
    subscriber(fn){
        this.observables.push(fn); // Adiciono novos items na coleção
    }

    // Opcional
    unsubscriber(fn){
        this.observables.filter(subscriber => subscriber !== fn); // Filtragem por valores que não sejam o valor passado por param.
    }

    // Obrigatório
    notify(data){
        this.observables.forEach(observer => observer(data)); // Percoro todos os valores da coleção
    }    
}

const observer = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

observer.subscriber(logData1);
observer.subscriber(logData2);
observer.subscriber(logData3);

observer.notify('Notified 1');

observer.unsubscriber(logData2);
observer.notify('Notified 2');
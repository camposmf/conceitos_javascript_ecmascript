// IN - Isso daqui está aqui?
something in somethingItems

// ARRAYS
var herois = new Array('Chapolim', 'Flash', 'Homem-Aranha', 'Batman', 'Superman');
0 in herois;                // retorna true
3 in herois;                // retorna true
6 in herois;                // retorna false

'Flash' in herois           // retorna false (Deve-se especificar o número do índice, não o seu valor)
'length' in herois          // retorna true (length é uma propriedade do Array)

// Objetos predefinidos
'PI' in Math;               // retorna true
var minhaString = new String('coral');
'length' in minhaString;    // retorna true

// Objetos personalizados
var meuCarro = {marca: 'Honda', modelo: 'Accord', ano: 1998};
'marca' in meuCarro;        // retorna true
'modelo' in meuCarro;       // retorna true

// instanceof - Verifica se o objeto é a instância de alguma coisa
objeto instanceof tipoObjeto;

var dia = new Data(2018, 08, 12);

if(dia instanceof Date){
    // code here
}

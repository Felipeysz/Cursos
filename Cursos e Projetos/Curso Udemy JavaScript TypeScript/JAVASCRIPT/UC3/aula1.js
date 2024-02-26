//Declarando função (Function hoisting)
//posso criar uma função no final do codigo que ao executar ele sera puxado para cima
falaOI();
function falaOI () {
    console.log('Oie');
}

// First-class objects (Objetos de Primeira classe)
// Function Expression


const souUmDado = function () {
    console.log('Sou um Dado');
}
souUmDado();
//Não é possivel executar antes do function pois
//ainda é uma constante


// function  executarFuncao(funcao) {
//     console.log('Executando Função abaixo:');
//  funcao();   
// }

// executarFuncao(souUmDado);

//Arrow Function

const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}


//Dentro do objeto
const obj = {
    falar: function () {
        console.log('Estou falando...');
    }
};
obj.falar();



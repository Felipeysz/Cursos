// argumentos que sustenta todos os argumentos enviados
function funcao(a, b , c) {
 let total = 0;
 for (let argumento of arguments) {
    total += argumento;
 }
 console.log(total, a, b, c);
 console.log(total);
}
funcao(1, 2, 3, 4, 5, 7, 8, 9, 10);



//argumentos sao valores que envia para os paremetros
function funcao2(a, b , c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);


function funcao3(a, b = 2, c = 4) {
console.log(a + b + c);

}
funcao3(2)

function funcao4(a, b = 2, c = 4) {
    console.log(a + b + c);
    
    }
funcao4(2, 10, 20)

function funcao5(a, b = 2, c = 4) {
console.log(a + b + c);       
}
funcao5(2, undefined, 20)//Fazer ele pular o numero b e 
    //seguir o valor difinido anteriomento
    //DEVEMOS USAR UNDEFINED



function funcao6( { nome, sobrenome , idade}) {
    console.log(nome, sobrenome, idade);
}
funcao6({nome:'Felipe', sobrenome:'Santana', idade:17});




function funcao7( [valor1, valor2 , valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao7(['Luis Felipe', 'Santos de Santana', 30]);



function contaprofessor (operador, acumulador,...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
// let numero in SIGNIFICA INDICES
// let numero of significa os numeros
//AO COLOCAR OS 3 PONTOS SIGINIFICA RESTO
//RESTO TEM QUE SER O ULTIMO
//        operador/acumulador/RESTO=numeros
contaprofessor ('+', 0,20,30,40,50);




function conta (operador, acumulador,...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    if (conta = operador === '+') {
        console.log('Conta Feita com Adição Resultado:'+acumulador);
    } else {
        console.log('Conta Feita com Outro Operador Resultado:');
    }
    console.log(acumulador);
};
// let numero in SIGNIFICA INDICES
// let numero of significa os numeros
//AO COLOCAR OS 3 PONTOS SIGINIFICA RESTO
conta ('+', 0,20,30,40,50);





const contaprofessor2 = function (operador, acumulador,...numeros) {
    console.log(arguments);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
contaprofessor2 ('+', 0,20,30,40,50);
//ARROW FUNCTION NÂO TEM ARGUMENTS 

// const contaprofessor2 = function (operador, acumulador,...numeros) => {
//     console.log(arguments);
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '/') acumulador /= numero;
//         if (operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// };
// contaprofessor2 ('+', 0,20,30,40,50);


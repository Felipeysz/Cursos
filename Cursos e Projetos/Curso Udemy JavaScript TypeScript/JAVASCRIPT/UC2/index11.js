const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var so tem escopo de função.
//OBS: JavaScript Faz Procura de Dentro Pra Fora

//OBS:VAR PODE SER MUDADO MESMO DENTRO DE OUTRO BLOCO

//OBS: As Buscas Do JavaScript Devem Ser Feitas de Baixo Pra CIMA//
//EXEMPLO:var nome2 = 'Felipe'; MANEIRA
//        console.log(nome2);   CERTA

//EXEMPLO:console.log(nome2);   MANEIRA
//      var nome2 = 'Felipe';   ERRADA





// let nome = 'Luis';
// var nome2 = 'Luis';

// var nome2 = 'Felipe';
// console.log(nome2);

// if(verdadeira) {
//     let nome = 'Felipe';
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Outra coisa';
//         console.log(nome , nome2);
//     }
// }


//OBS: LOG DE VARIAVEL FORA DA FUNCIOÇÃO NÂO FUNCIONA

//OBS: FUNCTION PODE PROCURAR COISAS FORA DELAS
//MAS NÂO PODEMOS PROCURAR DE FORA PRA DENTRO




// function falaOI () {
//     var sobrenome = 'Santana';

//     if (verdadeira) {
//         let nome = 'Luis';
//         console.log(sobrenome);
//     }
//     //MANEIRA ERRADA
//     //NÂO FUNCIONA POIS ELE NÂO PODE LER O (NOME)
//     console.log(nome);
// }

// falaOI();

// function falaOI () {
//     var sobrenome = 'Santana';

//     if (verdadeira) {
//         let nome = 'Luis';
//         console.log(sobrenome);
//         console.log(nome);
//     }
//     //MANEIRA CORRETA
// }

// falaOI();



console.log(sobrenome);



var sobrenome = 'Santana';
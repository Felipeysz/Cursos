//OBS: ELEMENTOS E ARRAYS SÃO COISAS DIFERENTES
// Valor Por referência
//                 0         1        2       3         4        5
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Luis' , 'Lucas', 'Pedro'];
// const novo = nomes.slice(1, 3)
// // console.log(nomes);
// console.log(novo);







//TRANSFORMANDO NOME COMPLETO EM NOMES SEPARADOS
//OBS:TEM QUE TER O ESPAÇO OU VIRGULA DENTRO DO CODIGO POIS ISSO QUE IRA SEPARAR OS NOMES


const nomes = ['Luis', 'Felipe', 'Santos', 'De', 'Santana']
const nome = nomes.join (' ');
console.log(nome);


//                  TESTE 1
// const nome = 'Luis Felipe Santos de Santana';
// const nomes = nome.split (' ');
// console.log(nomes);

//                  TESTE 2
// const nome2 = 'Luis, Felipe, Santos, de ,Santana';
// const nomes2 = nome2.split (',');
// console.log(nomes2);

//              TESTES FORA DA AULA

// delete [3];
// nomes[3] = '';



//                      COMANDOS

//JOIN PODE TRANSFORMAR ARRAYS EM STRING

// SLICE PODE TRANSFORMAR STRING EM ARRAYS
// SLICE (Numeros Negativos Tiram o Final de Acordo com o Numero)
// EX: -1 IRA TIRAR O ULTIMO NOME -2 IRA TIRAR OS ULTIMOS 2 NOMES
// SLICE (COMEÇA / TERMINA) OBS SEMPRE COLOQUE 1 INDICE A + PARA FICAR CERTO

// PUSH Adiciona Algo No FINAL

// UNSHIFT Adiciona Algo No COMEÇO

// POP Remove no FINAL

// SHIFT REMOVE o COMEÇO






//                  TESTES

// const novo = [...nomes];
// novo.pop();
// console.log(nomes);
// console.log(novo);
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'Felipe';
// delete nomes[2];
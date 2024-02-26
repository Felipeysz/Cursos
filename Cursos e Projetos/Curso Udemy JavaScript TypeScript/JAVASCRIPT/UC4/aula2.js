//nomes.splica(índice ,delete ,elem1, elem2, elem3, elem4, elem5, elem6);
//PRIMEIRO NUMERO INDICA QUAL INDICE 
//SEGUNDO NUMERO INDICA O QUE IREI REMOVER OU ADICIONAR E A QUANTIDADE

console.log('TESTE 1 REMOVER');
{
//EX SPLICE(5, 1) IRA REMOVER LUIS
//IRA REMOVER O QUE DEMARCAMOS
//NÂO ADIANTA FAZER (5, 2) POIS NÂO EXISTE UM NOME DEPOIS DE LUIS ASSIM NÃO TERIA MAIS NADA PARA REMOVER

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes1 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const removidos1 = nomes1.splice(5, 1);
console.log(nomes1, removidos1);
}



console.log('                                   ');



console.log('TESTE 2 REMOVER');
{
//EX 2 SPLICE(4, 2) IRA REMOVER LUCAS E LUIS
//POIS 4 È DE ONDE IREI REMOVER E 2 SERA A QUANTIDADE DE INFORMAÇÕES REMOVIDAS DEPOIS

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes2 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const removidos2 = nomes2.splice(4, 2);
console.log(nomes2 , removidos2);
}



console.log('                                   ');



console.log('TESTE 3 REMOVER');
{
//EX 3 SPLICE(-3, Number.MAX_VALUE) IRA REMOVER TUDO APARTIR DO -3(INDICE) ISSO INCLUE O FELIPE
//MAS EU PODERIA COLOCAR UM NUMERO QUE IRIA INDICAR O QUANTO EU QUERO EXCLUIR
//CASO O PRIMEIRO NUMERO SEJA 0 IRA EXCLUIR TUDO
//CASO O SEGUNDO NUMERO (Number.MAX_VALUE) SEJA 0 IRA EXCLUIR NADA

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes3 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const removidos3 = nomes3.splice(-3, Number.MAX_VALUE);
console.log(nomes3 , removidos3);
}



console.log('  AGORA IREMOS ADICIONAR            ');



console.log('TESTE 1 ADICIONAR');
{
//EX 4 SPLICE(3, 0, 'Pedro') IRA ADICIONAR PEDRO NO 3 INDICE E FELIPE IRA PARA O QUARTO INDICE
//AQUI NÃO SERA REMOVIDO NADA

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes4 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar1 = nomes4.splice(3, 0, 'Pedro');
console.log(nomes4 , adicionar1);
}



console.log('                                   ');



console.log('TESTE 2 ADICIONAR');
{
//EX 5 SPLICE(3, 1, 'Pedro') IRA ADICIONAR PEDRO NO 3 INDICE E IRA REMOVER O FELIPE
//AQUI IRA SUBSTITUI FELIPE POR PEDRO

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes5 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar2 = nomes5.splice(3, 1, 'Pedro');
console.log(nomes5 , adicionar2);
}



console.log('                                   ');



console.log('TESTE 3 ADICIONAR');
{
//EX 6 SPLICE(4, 2, 'Pedro') IRA ADICIONAR PEDRO NO 4 INDICE E IRA REMOVER O LUCAS E LUIS
//AQUI IRA REMOVER LUCAS E LUIS E IRA COLOCAR PEDRO DEPOIS DE FELIPE

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes6 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar3 = nomes6.splice(4, 2, 'Pedro');
console.log(nomes6 , adicionar3);
}



console.log('                                   ');



console.log('TESTE 4 ADICIONAR');
{
//EX 5 SPLICE(3, 1, 'Pedro', 'Eduarda') IRA ADICIONAR PEDRO NO 3 INDICE E EDUARDA NO 4  ASSIM IRA REMOVER O FELIPE E IRA COLOCAR PEDRO NO LUGAR
//AQUI IRA SUBSTITUI FELIPE POR PEDRO E ADICIONAR EDUARDA LOGO DEPOIS

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes7 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar4 = nomes7.splice(3, 1, 'Pedro', 'Eduarda');
console.log(nomes7 , adicionar4);
}



console.log('                                   ');



console.log('TESTE 5 ADICIONAR');
{
//EX 6 SPLICE(4, 2, 'Pedro', 'Eduarda') IRA ADICIONAR PEDRO E EDUARDA NO 4 E 5 INDICE E IRA REMOVER O LUCAS E LUIS
//AQUI IRA SUBISTITUIR LUCAS E LUIS POR PEDRO E EDUARDA

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes8 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar5 = nomes8.splice(4, 2, 'Pedro', 'Eduarda');
console.log(nomes8 , adicionar5);
}



console.log('                                   ');



console.log('TESTE FORA DA AULA (PROCURAR)');
{
//EX [FORA DA AULA] Ao Colocar o Nome Dentro do indexOf('')
//IREI PROCURAR O NOME PELA LISTA DE NOMES DENTRO DO ForaAula

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const ForaAula = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis']
const nomeProcurar =  ForaAula.splice(ForaAula.indexOf('Luis') , 1)
 
console.log ( ForaAula , nomeProcurar)
}



console.log('                                   ');



console.log('EMULANDO POP');
{
//REMOVE SOMENTE O ULTIMO

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes9 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const removidos4 = nomes9.splice(-1, 1);
console.log(nomes9 , removidos4);
}



console.log('                                   ');



console.log('EMULANDO SHIFT');
{
//REMOVE SOMENTE O PRIMEIRO

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes10 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const removidos5 = nomes10.splice(0, 1);
console.log(nomes10 , removidos5);
}



console.log('                                   ');



console.log('EMULANDO PUSH');
{
//ADICIONA NO FINAL
//PODEMOS ULTILIZAR (Number.MAX_VALUE, 0, 'Leonardo') OU (nomes.length, 0, 'Leonardo')

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes11 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar6 = nomes11.splice(Number.MAX_VALUE, 0, 'Leonardo');
console.log(nomes11 , adicionar6);
}



console.log('                                   ');



console.log('EMULANDO UN-SHIFT');
{
//ADICIONA NO COMEÇO
//PODEMOS ULTILIZAR (Number.MIN_VALUE, 0, 'Leonardo') OU (0, 0, 'Leonardo')

//               -6        -5      -4          -3       -2       -1
//                0         1       2           3        4        5  
const nomes12 = ['Maria' , 'João', 'Eduardo', 'Felipe', 'Lucas', 'Luis'];
const adicionar7 = nomes12.splice(Number.MIN_VALUE, 0, 'Leonardo');
console.log(nomes12 , adicionar7);
}
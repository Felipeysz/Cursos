//REDUCE = REDUZIR OS VALORES PARA 1

//Some todos os números (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)


//Podemos Definir o valor do Acumulador
//Se Colocar [] dps do primeiro } ele se transforma num array
//               0  01  02  3  4  5  6  7  8  09  10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador,valor,indice,array) {
    const resultado = acumulador + valor;
    return resultado;
}, []);
console.log(total);

//Devemos usar % para dividir nessa situação
//Para termos os IMPARES é Somente Adicionar um ! na Frente dos ====
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total2 = numeros.reduce(function (acumulador,valor,indice,array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total2);


//Dobrando os Numeros
const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total3 = numeros.reduce(function (acumulador,valor,indice,array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(total3);


//ERRO ELE ESTA SOMANDO JUNTO COM O 5
//OBS PARA GARANTIR QUE ALGUMAS CONTAS NÂO DEEM ERRO SE POSSIVEL COLOCAR O 0
//DEPOIS DA }
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total4 = numeros.reduce(function (acumulador,valor,indice,array) {
    if (valor % 2 === 0) {acumulador += valor;
    }
        return acumulador;
}, 0);
console.log(total4);




// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Lucas', idade: 29 },
    { nome: 'Luiz', idade: 22 },
    { nome: 'Fernando', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 60 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
  ];

  const maisVelha = pessoas.reduce(function (acumulador,valor) { 
    if(acumulador.idade > valor.idade) return acumulador;
    return valor

    //CASO O IF ESTEJA ERRADO AUTOMATICAMENTE O RETURN acumulador NÃO SERA LIDO
    //ASSIM IREMOS VER O RETURN VALOR
    //OBS: POR ISSO NÃO PRECISAMOS DO ELSE
  });
  console.log(maisVelha);
//Filter -> Sempre retorna um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
//
console.log(' ');

//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const resultado = numeros.filter(valor => valor > 10);
console.log(resultado);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoa que tem mais de 50 anos
// Retorne as pessoas cujo nome termina com a
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

   // toLowerCase() Converte os nomes para letra minuscula
   //endsWith('a') Termina com (A)
  const resultadoPessoas = pessoas
    .filter(nomePessoas => nomePessoas.nome.length >= 5)
    .filter(idadePessoas => idadePessoas.idade > 50)
    .filter(letraA => letraA.nome.toLowerCase().endsWith('a'));
  console.log(resultadoPessoas);

  const pessoasComNomeGrande = pessoas.filter (obj => obj.nome.length >= 5);
  const pessoasComMaisDeCinquentaAnos = pessoas.filter (obj => obj.idade > 50)
  const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
  });
  console.log(pessoasComNomeGrande);
  console.log(pessoasComMaisDeCinquentaAnos);
  console.log(nomeTerminaComA);


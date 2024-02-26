//OBS SUPREMA: EXISTE REALMENTE UMA ORDEM DENTRO DOS PAREMETROS DA FUNÇÃO (VALOR|INDICE|ARRAY)
// Dobre os números
//               0  01  02  3  4  5  6  7  8  09  10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//OBS MAP SEM PRE TEM QUE USAR ()
const numerosEmDobro = numeros.map(function (valor,indice) {
    return valor * 2;
});
console.log(numerosEmDobro);


//Para cada elemento:
//Retorne Apenas uma String com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto


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
//NOME É UM OBJETO ENTÃO PODERIAMOS ULTILIZAR O DELETE OBJ.NOME
  const nomes = pessoas.map(obj => obj.nome);
  console.log(nomes);

  const idades = pessoas.map (obj => ({ idade: obj.idade}));
  console.log(idades);


  //Adicionamos id=Indice e Retornamos o OBJ
  //Colocamos 1 numero a + para não ficar 0/1/2/3/4/5...
  //Colocamos * 1000
  //AO ULTILIZAR obj.id IREMOS ALTERAR O PESSOAS
  // ao usar o {... obj estamos copiando o pessoas que esta vinculado 
  // atraves do pessoas.map()}
  const comIds = pessoas.map(function (obj, indice) {
    const newObj = {... obj}
    newObj.id = (indice + 1) * 1000;
    return newObj
  });
  console.log(comIds);
const pessoa = {
    nome:'Felipe',
    sobrenome: 'Santana',
    idade: '17',
    endereco: {
        rua: 'Waly Salomão',
        numero: 8
    }
};

//Atribuição via desestruturação
//OBS = no Nome é caso não Existe A Chave (RESULTADO SERA=NÂO EXISTE)

// const { nome = 'Não Existe', sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);


// //Alterando Nome da Constante Na Hora do Resultado.
// const { nome:teste = 'Não Existe', sobrenome:teste2, idade:teste3 } = pessoa;
// console.log(teste, teste2, teste3);

// const {
//     endereco: { rua = 12345, numero},
//     endereco
//     } = pessoa;
// console.log(rua, numero, endereco);

const {nome, sobrenome, ...resto} = pessoa;
console.log(resto);
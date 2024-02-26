const frutas = ['Péra','Maçã','Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//Leitor de Indices (For in)
// for (let indices in frutas) {
//     console.log(frutas[indices]);
// }

const pessoa = {
    nome: 'Luis',
    sobrenome:'Santana',
    idade:17
};
console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}




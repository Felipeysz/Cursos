// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index (Padrão ser Usado)
// for (let i = 0; i <=5; i++) {
//     console.log('Linha '+i);
// };

// for (let i = 500; i >= 400; i -= 10) {
//     console.log('Linha '+i);
// };

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i, par);
// };

// //Indice           0      1       2
// //Array A Baixo
// const frutas = ['Maça', 'Pêra', 'Uva'];

// //Descobrindo Tamanho do Array
// console.log(frutas.length);


const frutas = ['Maça', 'Pêra', 'Uva', 'Banana', 'Abacaxi', 'Melancia'];

//Contador de Indices Dentro Do Frutas
for (let i = 0; i < frutas.length; i++){
    // console.log(i);
    // console.log(frutas[i]);
    console.log('Indice '+i, frutas[i]);
};

/*
Primitivos - string, number, boolean, undefined,
null (bigint, symbol)
*/
// let nome = 'Luis';
// nome = 'Felipe';
// console.log(nome[0]);
// let a = 'A';
// let b = a; // Copia
// console.log(a, b);
// a = 'Outra Coisa';
// console.log(a, b);

//Referemcoa (mutável) - array, object, function - Passados Por Referencia
// let a = [1, 2, 3];
// let b = [...a];
// // let b = a;
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luis');
// console.log(c);

const a = {
    nome: 'Luis',
    sobrenome: 'Santana'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);
// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÂO é divisivel por 3 e 5 = Retorna o próprio número
//Checar se o número é realmnete um número = Retornar o próprio número
//Use a função com números de 0 a 100
function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
console.log('a', fizzBuzz('a')); //Colocado uma letra
for(let i = 0; i <= 100; i++) { //de 0 a 100
    console.log(i, fizzBuzz(i));
}
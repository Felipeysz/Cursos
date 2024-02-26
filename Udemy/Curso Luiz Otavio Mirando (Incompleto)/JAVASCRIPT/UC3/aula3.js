//RETURN
//retorna algo
//termina a função

function soma(a,b){
    return a + b;
}
console.log(soma(5,2));

function criaPessoa(nome,sobrenome) {
    return {nome , sobrenome};
}
const p1 = criaPessoa ('Felipe','Santana');
const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
};
console.log(p1);
console.log(p2);
console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('mundo!');
console.log(resto);
// const OlaMundo = falaFrase('Olá');
// console.log(OlaMundo('mundo!'));

function criaMutiplicador (multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMutiplicador(2);
const triplica = criaMutiplicador(3);
const quadruplica = criaMutiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));


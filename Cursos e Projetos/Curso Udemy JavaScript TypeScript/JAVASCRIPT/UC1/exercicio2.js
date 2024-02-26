const nome = 'Felipe';
const sobreNome = 'Santana';
const idade = 17;
const peso = 55;
const altura = 1.74;
const anoAtual = 2023;

let imc = peso / (altura * altura);
//console.log(imc);

let anoNascimento = anoAtual - idade;
//console.log(anoNascimento);

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura', 'e seu IMC é de', imc);
console.log(nome, sobreNome,'nasceu em', anoNascimento);
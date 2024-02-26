const numero = Number(prompt('Digite um número'));
// let numero = prompt('Digite um número');
// numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const Inteiro = document.getElementById('Inteiro');
const NaN1 = document.getElementById('NaN');
const Baixo = document.getElementById('Baixo');
const Cima = document.getElementById('Cima');
const Decimais = document.getElementById('Decimais');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
Inteiro.innerHTML = numero + ` é Inteiro: ` + Number.isInteger(numero);
NaN1.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
Baixo.innerHTML = numero + ` Arredondando Para Baixo: ` + Math.floor(numero);
Cima.innerHTML = numero + ` Arredondando Para Cima: ` + Math.ceil(numero);
Decimais.innerHTML = numero + `Com Duas Casas Decimais: ` + (numero.toFixed(2));
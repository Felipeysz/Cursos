/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true || false -> vai retornar "o valor Verdadeiro"
 * FALSY 
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
*/

const a = 0;
const b = null;
const c = 'false'; //EXIBIDO
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
console.log(a || b || 'Joaozinho' || c || d || e);

// console.log('Luis' && 'Maria');
// console.log('Luis' && null && 'Maria');
// console.log('Luis' && undefined && 'Maria');
// console.log('Luis' && NaN && 'Maria');
// console.log('Luis' && '' && 'Maria');
// console.log('Luis Felipe' && 0 && 'Maria');
// console.log('Luis Felipe' && true && 'Maria');
// console.log('Luis Felipe' && true && NaN);

// function falaOI () {
// return 'Oi';
// }
// let vaiExecutar = 'Joaozinho';
// console.log(vaiExecutar && falaOI());
// console.log(0 || false || null || 'Luis Felipe' || true);

// const corUsuario = null;
// const corUsuario = 'Vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);

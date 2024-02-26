/**
 * OPERADORES LOGICOS
 * && -> AND -> E (TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE)
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

const expressaoAND = true && true && false && true;
console.log(expressaoAND);

const expressaoOR = true || false;
console.log(expressaoOR);

const usuario = 'Luis';
const senha = '123456';

const vailogar = usuario === 'Luis' && senha === '123456';
console.log(vailogar);

const vailogar2 = usuario === 'Luis' && senha === '12345';
console.log(vailogar2);

console.log(true);
console.log(!false);
//typeof informa o que seria o objeto EX: Number, String, Boolean.
const a1 = [1, 2, 3];
const a2 = [4, 5, 6]
console.log('TESTE 1');
const a3 = a1.concat(a2, [7, 8, 9], 'Felipe');
// ... REST -> ... SPREAD
console.log(a3);

console.log('TESTE 2');
//PARA ADICIONAR UM ARRAY USANDO O SPRAD DEVEMOS USAR OS ...
const a4 = [...a1, ...a2, ...[7, 8, 9], 'Felipe']
console.log(a4);

console.log('USANDO TYPEOF');
console.log(typeof a3);
//TYPEOF DEVE SER USADO COM UM ESPAÇO E NÃO COM UM PONTO
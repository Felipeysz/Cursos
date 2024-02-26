//               01234567
let umaString = "O rato roeu a roupa do rei de roma";
//(4) é o numero da letra do que esta Escrito no let
//Começa com 0 e os espaços tb contão.
console.log(umaString[4]);
console.log(umaString.charAt(0));
console.log(umaString.concat(' em um lindo dia.'));
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('O'));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.length);//Descobre o tamanho do seu texto.
console.log(umaString.slice(2, 6));//sempre colocar 1 a + no final pra pegar as letras que deseja.
//Quando se usa numero negativo vc pega o tamanho da String e diminui pelo valor negativo.
console.log(umaString.substring(umaString.length - 5, umaString.length -1));
console.log(umaString.split(' ' , 3));//usa para Dividir Dentro do Log
//Exemplo Usado no Espaço. posso colocar um numero dps das ('') colocando a (,)
console.log(umaString.toUpperCase());//Tudo Maiusculo.
console.log(umaString.toLowerCase());//Tudo Minisculo.
console.log(umaString.slice(-1));
console.log(umaString.substring(umaString.length - 3, umaString.length -0));

console.log(umaString.split(' ' , -1));//usa para Dividir Dentro do Log



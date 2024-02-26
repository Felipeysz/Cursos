//Primeira Forma
let num1 = 9.54578;
let num2 = Math.floor(num1);//floor arredondamento pra baixo.
let num3 = Math.ceil(num1);//ceil arredondamento pra cima.
console.log("Primeira Maneira,Número é:" + num3);
console.log("Primeira Maneira,Número é:" + num2);

//Segunda Forma

let num11 = 9.54578;
let num12 = Math.round(num11);
console.log("Segunda Maneira,Número é:" + num12);
console.log("Número Maximo Entre Eles" + Math.max(1,2,3,4,5,6,7,8,9,0));
console.log("Número Minimo Entre Eles:" + Math.min(-1,-2,-3,-4,-5,-6,-7,-8,-9,1,2,3,4,5,6,7,8,9,0));
console.log("Número Aleatorio:" + Math.random());
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log("Numero Aleatorio Entre (5/10):" + aleatorio);
console.log("Valor de Pi:" + Math.PI);
console.log("Valor Elevado:" + Math.pow(2, 10));//Não muito utilizavel preferencia usar **
console.log("Valor Elevado:" + 2 ** 10);//FORMA DE CONTA MAIS ULTILIZAVEL E DE FACIL ENTENDIMENTO
let num13 = 25 //Raiz Quadrada
console.log("Raiz Quadrada de "+ num13 + " é:" + num13 ** 0.5);

//OBS ERRO NÃO RECONHECIDO PELO JS
console.log(100 / 0);//NUMEROS DIVIDIDOS POR 0 È = INFINITY
let num1 = 10; //number
let num2 = 2.5; // number
let num3 = 10.564564645;

let num4 = 0.7;
let num5 = 0.1;
let num6 = 0.7;
let num7 = 0.1;

//num6 = ((num6 * 100) + (num7 * 100)) / 100; 2 forma de arrumar esse erro do javascript

num6 = ((num6 * 100) + (num7 * 100)) / 100;//0.8
num6 = ((num6 * 100) + (num7 * 100)) / 100;//0.9
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.0
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.1
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.2
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.3
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.4
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.5
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.6
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.7
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.8
num6 = ((num6 * 100) + (num7 * 100)) / 100;//1.9
num6 = ((num6 * 100) + (num7 * 100)) / 100;//2.0
console.log(num6);

num4 += num5; //0.8
num4 += num5; //0.9
num4 += num5; //1.0
num4 += num5; //1.1
num4 += num5; //1.2
num4 += num5; //1.3
num4 += num5; //1.4
num4 += num5; //1.5
num4 += num5; //1.6
num4 += num5; //1.7
num4 += num5; //1.8
num4 += num5; //1.9
num4 += num5; //2.0

num4 = Number(num4.toFixed(2));//Forma de Arrumar O Erro De COnta COm Numeros Menores

console.log(num4);

//resultado não da numero inteiro
//para resolver esse problema devemos fazer.

console.log(num1.toString() + num2);//o Num1 so vira String Nessa Linha/Abaixo ele Volta A Ser Number.
console.log(num3.toFixed(2));//Diminue O tamanho de Casas
console.log(Number.isInteger(num1));//Numeros Inteiros=True
console.log(Number.isInteger(num3));//Numeros Não Inteiros =False
let temp = num1 * 'Óla';
let temp2 = num1 * '5';
console.log(Number.isNaN(temp));//OBS Sempre Que A Conta For Invalido Sera (TRUE)
console.log(Number.isNaN(temp2));//OBS È UM NUMERO MAS AINDA È UMA STRING NÂO È POSSIVEL FAZER UMA CONTA CORRETA.

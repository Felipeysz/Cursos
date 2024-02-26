/**
 * Aritméticos
 * (+) Mais/Concatenação
 * (-) Menos
 * (/) Dividir
 * (*) Mutiplicar
 * (**) Potenciação
 * (%) Resto da Divisão
 */

/* Ordem Das Contas Na Programação

        ()
        **
        * / %
        + -

*/
// não podemos ultilizar const pois daria erro
//pois n podemos mudar o valor de uma constante

let contador = 1;
contador ++ //2
contador ++ //3
contador ++ //4
contador ++ //5
console.log(++contador);
console.log(contador++);
console.log(contador);

// Incremento = ++
// Decremento = --

contador -- //0
contador ++ //-1
contador ++ //-2
contador ++ //-3
console.log(--contador);
console.log(contador--);
console.log(contador);


const num1 = 5;
const num2 = 2;
const num3 = 10
console.log((num1 + num2) * num3);


const passo = 2;
let continha = 0;

continha = continha + passo;
console.log(continha);
continha = continha + passo;
console.log(continha);
continha = continha + passo;
console.log(continha);

continha += 2;
console.log(continha);
continha *= 2;
console.log(continha);
continha -= 2;
console.log(continha);
continha /= 2;
console.log(continha);
continha **= 2;
console.log(continha);
continha %= 2;
console.log(continha);


//AS vezes O JavaScript tenta Resolver SEUS Erros.
//Mas não é sempre que ele Consegue Resolver
const  num4 = 10;
const num5 = '5';

//nah - Not a Number parseInt (inteiro), parseFloat(decimais)
//Conversão String=Numero parseInt ('5')
//Conversão Numeros com Pontos = (5.5) parseFloat

const teste =  parseInt ('5');
console.log(teste);

const teste2 =  parseFloat ('5.2');
console.log(teste2);

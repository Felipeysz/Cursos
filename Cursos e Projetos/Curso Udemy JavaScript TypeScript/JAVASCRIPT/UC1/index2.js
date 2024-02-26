//var é a mesma coisa que let 
//so que é usado em codigos mais antigos


//let é uma varial
let apelido; //Podemos dar Um Valor A Uma palavra e mudar depois de feito dentro do codigo
let nome = 'Felipe'; //String 

//Não Podemos Declarar Duas Vezes a Mesma Palavara (Nome)
//Não podemos Declarar Nome para Codigos (Let "if" = error).
//Variaveis Precisam ter nomes significativos para ajudar os debugadores de codigo
//Exemplo n=João (o que seria o "N")
//Exemplo Correto NomeCliente = João (Mais Facil de Identificar)
//Não Conseguimoes Começar Ultilizando Numeros = (1nome)
//Depois da Primeira Letra Podemos Usar Um Numero = (n1ome)
//preferencia começar com letras minusculas
//OBS nomes compostos Ultilamos camelCase Exemplo (nomeCompleto)
//Letras Minusculas e Maiusculas tem Diferença.

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'Conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'se chama Eduardo.');

//Podemos Mudar o resultado se 
//precisamos Colocar Nomes Ou Valores Diferentes 
//em outro momento do codigo.

nome = 'Lucas';

console.log(nome);

//String = Text | Number = Número.

// (+ - * /)
//Const é um numero que é fixo e não podemos
//mudar o valor durante o Codigo.
const primeiroNumero = 5; //Number.
const segundoNumero = 10; //Number.
const terceiroNumero = '50';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado *2;

//typeof ajuda a saber Qual o tipo do seu Codigo (String/Number).
//OBS deve Procurar Selecionando Inclusive o codigo que esta procurando.
//Caso tente sem Selecionar O Codigo Junto o resultado sera Indefinido.
//Se eu tentar Juntar Uma String com um Number sera Concatenado.
//Exemplo ('5' + 10 = 510).
//Caso eu Queira saber se é uma String Ou Number de 2 Exemplos
//Devo Deixalos em ().

console.log(typeof (primeiroNumero + segundoNumero));
console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);
console.log(typeof terceiroNumero);
console.log(resultado);
console.log(resultadoDuplicado);

//Let é uma variavel e podemos Mudar os Numero.
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

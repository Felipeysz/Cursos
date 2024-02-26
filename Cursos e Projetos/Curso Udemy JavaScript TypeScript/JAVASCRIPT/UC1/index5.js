//Ao Clicar Em Ok a resposta sera Undefined
//se eu Não Colocar algo pra retornar.
//OBS ISSO È PADRÃO NÂO È UM ERRO.
alert('Com a nossa Mensagem');

//Ok=true Cancelar=False
confirm('Deseja realmente apagar?');
const confirma = confirm('Realmente deseja apagar?');
//agora o valor de Confirma é (true)
let confirmar = confirm('Qualquer Mensagem');

//O que digitar dentro sera passado ao Console
//Tudo que é Retornado Do Site Pelo (PROMPT) SERA UMA STRING
prompt('Digite o Seu Nome');
let num1 = prompt('Digite um Número'); //String
let num2 = prompt('Digite Outro Número'); //String
num1 = parseFloat(num1);//Transformando em um Number
typeof num1; // = Number
num2 = Number(num2);//Transformando em um Number
num1 + num2; //As Contas Serão Feitas Normalmente

//Ao Usurio Digitar um Numero ele sera utilizado nas variaveis
// num1 = Numero que o usuario digitar
//Dentro Do Console o Numero que ele Digitar Sera Considerado String
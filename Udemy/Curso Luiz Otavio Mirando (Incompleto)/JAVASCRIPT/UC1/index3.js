//String, number, underfined, boolean
const nome = 'Luis';//String
const nome1 = "Luis";//String
const nome2 = `Luis`;//String
const num1 = 10;//Number
const num2 = 10.52;//Number
let nomeAluno;//undefined -> não aponta pra local nenhuma na memória.
//Não é possivel inciar Const sem colocar um valor ou null.
const sobrenomeAluno = null; //nulo -> Não aponta pra local nenhuma na memoria.
const aprovado = false; //Boolean = true, false (Lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log (a, b); // 3,2
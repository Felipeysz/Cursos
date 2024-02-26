const pontuacaoUSuario = 1000;

const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal';
//if e else em tamanho Menor(SO FUNCIONA SE FOR SOMENTE 1 IF e 1 ELSE)

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


// if (pontuacaoUSuario >= 1000) { 
// console.log('Usuário VIP');

// }else {
// console.log('Usuário Normal');}
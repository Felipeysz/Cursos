/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa Tarde
 * Entre 18 - 23 - Boa Noite
 */

// IF pode ser Usado Sozinho.
// Sempre que que ultilizo a palavra else, preciso de um if.
// Eu posso ter vários else ifs na checagem.
//Só Posso ter um else na checagem.
// Podemos Usar Condicões sem else if, ultilizando apenas if e else.

const hora = 22;
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
}else {
    console.log('Hora Indefinida Por Favor Verifique Novamente');
};

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa');
}else {
    console.log('Não Vou Sair de Casa');
}

const tenhoTempo = true;

if (tenhoTempo) {
    console.log('Vou sair de casa');
}
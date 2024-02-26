// const nome = 'Luis';

// let controle = 0;

// //Contagem Ate 10
// //OBS AO DIGITAR O BREAK O NUMERO SERA 0 POIS SO IRA CONTAR 1 VEZ
// while (controle < nome.length) {
//  console.log(nome[controle]);
//  controle++;
// }

//Numero ALEATORIO
function random (min , max) {
    const r = Math.random () * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;
// let rand = random(min, max);
// console.log(rand);

//WHILE PRIMEIRO:CONDIÇÃO DPS O CODIGO
//DO WHILE PRIMEIRO:CODIGO DPS A CONDIÇÃO

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('**************');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
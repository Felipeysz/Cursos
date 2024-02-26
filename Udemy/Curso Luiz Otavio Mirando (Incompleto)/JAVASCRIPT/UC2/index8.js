// // const tresHoras = 60 * 60 * 3 * 1000;
// // const umDia = 60 * 60 * 24 * 1000;
// // const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019,3,20, 15 , 14, 27, 500); //ANO|MES|DIA|HORA|MINUTO|SEGUNDO|MILEZIMO DE SEGUNDO
// const data2 = new Date('2019-4-20 20:20:59');
// console.log(data.toString());
// console.log(data2.toString());

// const data3 = new Date();
// console.log('Dia' , data3.getDate);
// console.log('Mês' , data3.getMonth) + 1; //Mês Começa Do Zero
// console.log('Ano' , data3.getFullYear);
// console.log('Hora' , data3.getHours);
// console.log('Min' , data3.getMinutes);
// console.log('Seg' , data3.getSeconds);
// console.log('Ms' , data3.getMilliseconds);
// console.log('Dia Semana' , data3.getDay); // 0 - Domingo , 6 Sábado
// console.log(data3.toString());
// console.log(Date.now);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

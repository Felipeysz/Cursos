function getDiaSemanaTexto(diaSemana) {
    let diaSemanaText

    switch(diaSemana) {
        case 0:
            diaSemanaText = 'Domingo';
            break;
        case 1:
            diaSemanaText = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaText = 'Terça-Feira';
            break;
        case 3:
            diaSemanaText = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaText = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaText = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaText = 'Sabado';
            break;
        default:
            diaSemanaText = ''; //default = else (Comparando com o IF/ELSE)
        }

        return diaSemanaText
}

const data = new Date('2006-02-10 00:00:00');
const diaSemana = data.getDay();
const diaSemanaText= getDiaSemanaTexto ();


// if (diaSemana === 0 ) {
//     diaSemanaText = 'Domingo';
// }else if (diaSemana === 1) {
//     diaSemanaText = 'Segunda-Feira';
// }else if (diaSemana === 2) {
//     diaSemanaText = 'Terça-Feira'
// }else if (diaSemana === 3) {
//     diaSemanaText = 'Quarta-Feira'
// }else if (diaSemana === 4) {
//     diaSemanaText = 'Quinta-Feira'
// }else if (diaSemana === 5) {
//     diaSemanaText = 'Sexta-Feira'
// }else if (diaSemana === 6) {
//     diaSemanaText = 'Sabado'
// }else {
//     diaSemana = ''; //Variavel Em Branco Caso a Data Esteja Errada
// }

console.log(diaSemana, diaSemanaText);
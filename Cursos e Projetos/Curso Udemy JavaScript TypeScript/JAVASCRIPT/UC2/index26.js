function monstraHora() {
    let data = new Date ();

    return data.toLocaleTimeString ('pt-BR', {
        hour12: false
    });
}

function funcaoDOInterval () {
    console.log(monstraHora());
}
//Necessario Usar o () ao final de uma function
//Colocar uma Funcão sem usar o () È PASSAR REFERENCIA
// setInterval(funcaoDOInterval , 1000);//Contagem em Milisegundos

const timer = setInterval(function () {
    console.log(monstraHora());
}, 1000);//Set Interval Executa Infinitas Vezes (SO PARA SE VC FIZER ELA PARAR)

setTimeout(function () {
    clearInterval(timer)
}, 3000); //Funcão de parar o Set Interval

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);//Colocando algo Dps de Parar o Set Interval
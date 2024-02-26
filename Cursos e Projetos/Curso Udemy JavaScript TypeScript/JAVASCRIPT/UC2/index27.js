function relogio () {

function criaHoraDosSegundos (segundos) {
   const data = new Date (segundos * 1000);
   return data.toLocaleTimeString('pt-Br', {
    hour12: false,
    timeZone: 'GMT'
   });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}



document.addEventListener ('click', function(e) {
    const elemento = e.target;
    if(elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado')//Removendo as Informaçoes da Classe Pausado do CSS
        segundos = 0;
    }

    if(elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')//Removendo as Informaçoes da Classe Pausado do CSS
        clearInterval(timer);
        iniciaRelogio();
    }

    if(elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado')//Adicionando as Informaçoes da Classe Pausado do CSS
        clearInterval(timer);
    }
});


// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado')//Removendo as Informaçoes da Classe Pausado do CSS
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (event) {
//     relogio.classList.add('pausado')//Adicionando as Informaçoes da Classe Pausado do CSS
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     relogio.classList.remove('pausado')//Removendo as Informaçoes da Classe Pausado do CSS
//     segundos = 0;
// });
}
relogio();
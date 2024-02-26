const nome = 'Luis';

function falaNome () {
    console.log(nome);
}
function usaFalaNome() {
    falaNome();
}
usaFalaNome();




const nome2 = 'Luis';

function falaNome2 () {
    const nome2 = 'Felipe';
    console.log(nome2);
}
function usaFalaNome2() {
    falaNome2();
}
usaFalaNome2();



const nome3 = 'Luiz';
function falaNome3 () {
    console.log(nome3);
}
function usaFalaNome3() {
    const nome3 = 'Henrique';
    falaNome();
}
usaFalaNome3();
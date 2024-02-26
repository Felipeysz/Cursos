// IIFE -> Immediately invoked function expression

(function (idade, peso , altura) {
    const sobrenome = 'Santana';
    function CriaNome(nome) {
        return nome + ' ' + sobrenome;
}
    function falaNome () {
        console.log(CriaNome('Luis'));
    }

    falaNome();
    console.log(idade , peso , altura);

})(17 , 56 , 1.74);


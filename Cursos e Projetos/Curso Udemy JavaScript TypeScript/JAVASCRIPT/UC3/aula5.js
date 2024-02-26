function retornaFuncao () {
    const nome = 'Luis';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);



function retornaFuncao2 (nome2) {
    return function () {
        return nome2;
    };
}

const funcao2 = retornaFuncao2('Felipe');
const funcao3 = retornaFuncao2('Henrique');
console.log(funcao2);
console.log(funcao3);
console.log(funcao(),funcao2(),funcao3());

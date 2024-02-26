//Usado Para Evitar que apareça um Erro para seu usuario Final
//Bom usar o Try/catch para tratar erros sem precisar colocar diretamente o erro para seu cliente Final

// try {
//     console.log(naoExisto);
// } catch(error) {
// console.log('naoExisto não existe.');
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x ou y precisam ser números')
    }
    return x + y;
}

//SE OCORRER ALGUM ERRO DENTRO DO BLOCO (TRY)
//(CATCH) SERA EXECUTADO
//CASO NÂO OCORRA (TRY) SERA EXECUTADO
try {
console.log(soma (1, 2));
console.log(soma ('1', 2));
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}
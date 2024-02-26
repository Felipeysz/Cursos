function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',    //Colocando para 2 digitos
        minute: '2-digit',  //Colocando para 2 digitos
        second: '2-digit',  //Colocando para 2 digitos
        hour12: false       //Transformando em 24 Horas
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(retornaHora(data)); //hora do data com o FORMATO do retornaHora
console.log(hora);//hora do retornaHora
}catch (error){
    console.log('Tratar Error');
}finally {
    console.log('Tenha Um Bom Dia!');
}


// retornaHora(new Date())
// retornaHora();
// retornaHora('adasda');
// retornaHora(11);






// try {
// //Executadas Quando Não A Erros
// }catch (e) {
// //Executadas Quando A Erros
// } finally {
//     // Sempre Sera Executado
// }

// try {
//     console.log('Abrir um Arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     } catch (e) {
//         console.log('Tratando o erro');
//     } finally {
//         console.log('FINALLY: Eu Sempre sou executado');
//     };

//     console.log('******************');

// try {
//     console.log(a);
//     console.log('Abrir um Arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     } catch (e) {
//         console.log('Tratando o erro');
//     } finally {
//         console.log('FINALLY: Eu Sempre sou executado');
//     }

// console.log('******************************');

//     try {
//         console.log('Abrir um Arquivo');
//         console.log('Manipulei o arquivo e gerou erro');
//         console.log('Fechei o arquivo');

//         try {
//             console.log(b);
//         } catch (e) {
//             console.log('Deu erro');
//         } finally {
//             console.log('FINALLY: Também sou final');
//         }
//     } catch (e) {
//         console.log('Tratando o erro');
//     } finally {
//         console.log('FINALLY: Eu sempre sou executado');
//     }
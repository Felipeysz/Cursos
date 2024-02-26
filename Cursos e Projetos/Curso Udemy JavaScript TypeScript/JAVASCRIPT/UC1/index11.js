const pessoa1 = {
        nome: 'luis',
        sobrenome: 'Santana',
        idade: 17,

        fala() {
                console.log(`A Minha Idade Atual é ${this.idade}`);
        },
        incrementaIdade() {
                this.idade++;
        }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


// function criaPessoa (nome, sobrenome , idade){
// return {
//     nome,sobrenome,idade
// };
// }
// const pessoa1 = criaPessoa('Luis', 'Santana', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('João', 'Moreira', 45);
// const pessoa4 = criaPessoa('Junior', 'lara', 37);
// const pessoa5 = criaPessoa('Jean', 'Otavio', 22);
// console.log(pessoa1.nome,pessoa1.sobrenome,pessoa1.idade,
//     pessoa2.nome,pessoa2.sobrenome,pessoa2.idade,
//     pessoa3.nome,pessoa3.sobrenome,pessoa3.idade,
//     pessoa4.nome,pessoa4.sobrenome,pessoa4.idade,
//     pessoa5.nome,pessoa5.sobrenome,pessoa5.idade
// );

// const pessoa1 = {
//     nome: 'Luis',
//     sobrenome: 'Santana',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };
//         //Pessoa1
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);
//         //Pessoa2
// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);
 
        //Pessoa 1
// const nome01 = 'Luis';
// const sobrenome01 = 'Santana'
// const idade01 = 16;
        //Pessoa 2
// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira'
// const idade02 = 25;

// const array = [1,2,3];
// array.push(4); //Permitido
// array[0] = 'Luiz' //Permitido
// array = 'Outra'; //Não Permitido Somente Se For Let
// console.log(array);
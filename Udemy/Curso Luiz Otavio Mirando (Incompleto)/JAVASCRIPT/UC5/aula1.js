//OBS Functions Dentro de OBJETOS = Metodos
//OBS Factory functions / Constructor functions
//São Padrões para projetos

//EX Factory Function
function criaPessoa(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luis','Felipe');
console.log(p1.nomeCompleto());


//OBS Funções Construtoras usam
//a Primeira letra em CAIXA ALTA
//OBS2 Usam o this para se referir
//OBS3 this é bom para ser usado para
//puxar informações de banco de dados

//EX Constructor Function
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //OBS OBJECT FREEZE ao Usar o Object.freeze() Irei Travar a Informação
    //para ela não ser alterada , adicionar ou deletar algo
    //OBS2 OBJECT FREEZE Posso fazer alterações , deletar ou adicionar algo antes desse Object.freeze()
    Object.freeze(this)
}
//OBS CONST Obrigatorio a palavra (new)
//OBS2 CONST as Contantes podem ter os valores dentro delas alterados
//OBS2 CONST assim o Lucas Por Exemplo pode ser alterado
//OBS2 CONST mas a p2 em si não pode ser alterada
const p2 = new Pessoa('Lucas', 'Santana');
const p3 = new Pessoa('Luis', 'Henrique');
//OBS o nome da função construtora ira
//aparecer no log do console
console.log(p2);
console.log(p3);

const pessoa = {
    nome:'Felipe',
    sobrenome: 'Santana'
};

const chave = 'sobrenome';
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

//A segunda forma a baixo é
//ultilizada dentro de banco de dados
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);




const pessoa2 = {
    nome:'Luis',
    segundoNome:'Santana'
}

console.log(pessoa1,pessoa2);




const pessoa1 = new Object();
pessoa1.nome = 'Luis';
pessoa1.segundoNome = 'Felipe';
pessoa1.idade = 17;
pessoa1.falarNome = function() {
    console.log(`${pessoa1.nome} esta falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - pessoa1.idade;
};

for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

// console.log(pessoa1.getDataNascimento());
// pessoa1.falarNome();

//Deletando o nome do pessoa1
//delete pessoa1.nome;

// console.log(pessoa1.nome);
// console.log(pessoa1.segundoNome);

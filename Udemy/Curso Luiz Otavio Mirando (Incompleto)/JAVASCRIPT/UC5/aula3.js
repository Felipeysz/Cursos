// defineProperty -> Gett er e Setters

//Explicação Rapida sobre o que eu entendi
//O Getter ele pega algo
//o Setter Altera algo no seu resultado final

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // monstra a chave
        configurable: true, // configurável
        //Configurando o Getter abaixo
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('O Estoque Não è um Valor');
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace(' coisa.',' Coisa.')
            nome = valor;
        }
    };
}

// const p1 = new Produto('Camiseta', 20 , 3);
// //console.log(p1);
// p1.estoque = 'O Valor que eu quero'
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa.'
console.log(p2.nome);
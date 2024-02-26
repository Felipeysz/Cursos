//EXEMPLO defineProperty
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    //OBS defineProperty SO PODERA USAR 1 CHAVE
    Object.defineProperty(this, 'estoque' , {
        enumerable: false, // monstra a chave
        value:estoque, // valor
        writable: false, // Flase = Não posso ALTERAR
        configurable: true // configuravel (False = Não posso reconfigurar ou apagar)
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}

//OBS defineProperties é usado para codigos mais sensiveis pois é mais facil 
//e intuitivo para editar as linhas de codigo
//EXEMPLO defineProperties
function Produto2 (nome2, preco2, estoque2) {
    Object.defineProperties(this,{
        nome2: {
            enumerable: false, // monstra a chave
            value:nome2, // valor
            writable: false, // Flase = Não posso ALTERAR
            configurable: true // configuravel (False = Não posso reconfigurar ou apagar)
        },
        preco2: {
            enumerable: false, // monstra a chave
            value:preco2, // valor
            writable: false, // Flase = Não posso ALTERAR
            configurable: true // configuravel (False = Não posso reconfigurar ou apagar)
        },
        estoque2: {
            enumerable: false, // monstra a chave
            value:estoque2, // valor
            writable: false, // Flase = Não posso ALTERAR
            configurable: true // configuravel (False = Não posso reconfigurar ou apagar)
        }
    });
}
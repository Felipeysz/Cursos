// Factory function (Função Fabrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura , peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala (assunto) {
            return `${this.nome} esta ${assunto}`;
        },
        altura:altura,
        peso:peso,
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Felipe','Santana',1.80,75);
const p2 = criaPessoa('Felipe','Santana',1.74,57);
const p3 = criaPessoa('Felipe','Santana',1.82,72);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


// p1.nomeCompleto = 'Lucas Felipe Santos'
// console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);
// const p2 = criaPessoa('Luis','Santos',1.60,55);
// console.log(p2.fala('Falando sobre JS'));
// console.log(p2.imc());
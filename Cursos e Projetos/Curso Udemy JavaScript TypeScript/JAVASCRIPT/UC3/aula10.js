//Função construtora -> objetos
//Função fabrica -> objetos
//Construtora -> Deve Criar Com letra Maiscula
//EX ENTRE CONSTRUTORA E FABRICA (Pessoa)/(criaPessoa)


//New Cria um Objeto Vazio/Faz o this Aponta para o Objeto Vazio
//E Retorna para a variavel assim não precisa do RETURN
function Pessoa (nome,sobrenome,idade,altura) {
    //Atributos ou métodos privados
    const ID  = 123456;
    const metodoInterno = function() {

    };
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.altura = altura;
    
    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    }
}
const p1 = new Pessoa('Luis','Felipe',17,1.74);
const p2 = new Pessoa('Maria','Oliveira',18,1.60);
p1.metodo();

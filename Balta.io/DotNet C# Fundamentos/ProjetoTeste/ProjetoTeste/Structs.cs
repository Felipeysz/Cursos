using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

//OBS: Struct Deve Estar Fora de Uma Class


namespace AulaStruct
{
    class Loja
    {
        static void ProdutosDaLoja(string[] args)
        {
            //O {mouse} é a Categoria do Produto
            //O "Mouse Gamer" é o nome dele
            var mouse = new ProdutoLoja(1,"Mouse Gamer",123.87);


            mouse.Id = 55; //Alterando O Valor Do Id

        }
    }
    struct ProdutoLoja
    //O Public Que Não Retorna Nada Deve Ter O Mesmo Nome Que O Struct
    {
        public ProdutoLoja(int id, string name, double price)
        // Declarar os Publics abaixo Dentro desse Public e Colocar no Parametros
        //Converter o que esta nos parametros para dentro do Public
        {
            Id = id;
            Name = name;
            Price = price;
        }

        public int Id;
        public string Name;
        public double Price; //Entrou na Conta do Return

        public double ConversorPriceInDolar(double dolar) // Usado na Conta do Return
        //Conversor Preço em Dolar
        {
            return Price * dolar;
        }
    }
}

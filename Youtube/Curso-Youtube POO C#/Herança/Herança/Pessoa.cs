using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Herança
{
    class Pessoa
    {
        //Atributos
        protected string nome;
        protected int idade;

        //Método
        protected void mensagemPessoa()
        {
            Console.WriteLine($"Nome:{nome}");
            Console.WriteLine($"Idade:{idade}");
        }
    }
}

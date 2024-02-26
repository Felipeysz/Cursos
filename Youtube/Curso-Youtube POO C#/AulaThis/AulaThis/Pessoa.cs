using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AulaThis
{
    class Pessoa
    {
        //Atributo
        private string nome = "Felipe";

        //Construção
        public Pessoa(string nome)
        {
            Console.WriteLine(nome);//Luis
            Console.WriteLine(this.nome);//Felipe
        }
    }
}

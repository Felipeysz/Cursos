using Metodos;//Necessario para usar o Pessoa obj
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Métodos
{
    internal class Principal
    {
        static void Main(string[] args)
        {
            Pessoa obj = new Pessoa();
            obj.Apresentar();// == Teste
            obj.Apresentar("Luis");// == Olá Felipe
            obj.Apresentar("Luis",17);// == Olá Felipe voçê tem 17 Anos
        }
    }
}

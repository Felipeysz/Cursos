using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstração
{
    abstract class Padrao
    {
        //Obrigatorio

        public abstract void TaxaEmprestimo(double valor);

        //Opcional
        public void CalculoPoupanca(double valor,double taxa)
        {
            Console.WriteLine($"Ganhos Obtidos Pela Poupança:{valor * taxa}");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    class Gerente : Imposto
    {
        //Métodos
        public override void valeAlimentacao(double salario)//override = Sobrescrevendo o Método
        {
            Console.WriteLine("Desconto Gerente do Vale Alimentação:R$" + (salario * 0.15));
        }

    }
}

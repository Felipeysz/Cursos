using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    class Imposto
    {
        //Métodos
        public virtual void valeAlimentacao(double salario)//==Vitual Significa(Pode Acontecer de Ocorrer algumas Alterações)
        {
            Console.WriteLine("Desconto Padrão do Vale Alimentação:R$" + (salario * 0.1));
        }

        public void valeTransporte(double salario)
        {
            Console.WriteLine("Desconto Padrão do Vale Transporte:R$" + (salario * 0.06));
        }
    }
}

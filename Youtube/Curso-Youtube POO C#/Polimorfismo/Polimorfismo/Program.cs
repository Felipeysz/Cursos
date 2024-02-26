using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    class Program
    {
        static void Main(string[] args)
        {
            //Instanciar Estágiario
            Imposto objetoE = new Estagiario();
            objetoE.valeAlimentacao(1000);
            objetoE.valeTransporte(1000);
            Console.WriteLine("---------------");
            //Instanciar Gerente
            Imposto objetoG = new Gerente();
            objetoG.valeAlimentacao(5000);
            objetoG.valeTransporte(5000);
            Console.WriteLine("---------------");
            //Instanciar Atendente
            Imposto objetoA = new Atendente();
            objetoA.valeAlimentacao(2500);
            objetoA.valeTransporte(2500);
            Console.WriteLine("---------------");

        }
    }
}

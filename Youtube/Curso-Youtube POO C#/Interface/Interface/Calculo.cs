using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    class Calculo : IPadrao
    {
        public void somar(int num1, int num2)
        {
            Console.WriteLine($"A Soma é: {num1 + num2}");
        }

        public void subtrair(int num1, int num2)
        {
            Console.WriteLine($"A Subtração é: {num1 - num2}");
        }
    }
}

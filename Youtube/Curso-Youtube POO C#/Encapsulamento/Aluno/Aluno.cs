using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Escola
{
    class Aluno
    {
        private double nota1, nota2;
        private double Media()
        {
            return (nota1 + nota2) / 2;
        }

        public void mensagem()
        {
            Console.WriteLine("Informe a Primeira Nota");
            nota1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Informe a Segunda Nota");
            nota2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine($"A Média é:{Media()}");
        }
    }
}

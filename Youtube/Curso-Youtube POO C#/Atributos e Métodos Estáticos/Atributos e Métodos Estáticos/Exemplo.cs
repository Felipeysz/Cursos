using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Atributos_e_Métodos_Estáticos
{
    class Exemplo
    {
        //Atributo Estático
        public static string Nome = "Felipe";

        //Método Estático
        public static void Soma(int num1,int num2)
        {
            Console.WriteLine(num1+num2);
        }
    }
}

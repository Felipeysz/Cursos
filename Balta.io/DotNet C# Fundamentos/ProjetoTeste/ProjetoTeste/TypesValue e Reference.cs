using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypesValueReference
{

    internal class TypesValue_e_Reference
    {
        public static void Main3(string[] args)
        {
            int x = 25;
            int y = x; //Y é uma cópia de X
            Console.WriteLine(x); //25
            Console.WriteLine(y); //25
            x = 32; //Somente X foi Alterado
            Console.WriteLine(x); //32
            Console.WriteLine(y); //25
        }

        static void ReferenceTypes(string[] args)
        {
            var lista = new string[2];
            lista[0] = "Item 1";
            var lista2 = lista; //Não cria uma cópia

            Console.WriteLine(lista[0]);
            Console.WriteLine(lista2[0]);

            //Altera as duas listas
            lista[0] = "Item Alterado";
            Console.WriteLine(lista[0]);
            Console.WriteLine(lista2[0]);
        }
    }
}

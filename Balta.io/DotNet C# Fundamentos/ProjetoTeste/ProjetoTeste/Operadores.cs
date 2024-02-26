using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Operadores
{
    class Operadores
    {
        public static void Main5(string[] args)
        {
            //Operadores + = Somar
            //Operadores - = Subitrair
            //Operadores / = Dividir
            //Operadores * = Multiplicar

            int soma = 25 + 22; //47
            int subtracao = 25 - 22; //3
            int multiplicacao = 25 * 22; //550
            int divisao = 22 / 5; //4 - Foi Arredondado

            int x = 2 + 2 * 2;// 6
            int y = 2 + (2 * 2);// 6 - Mesmo do Anterior
            int z = (2 + 2) * 2;//8 Executou a Soma Primeiro




            static void Atribuição(string[] args)
            {
                int x = 0; //Atribuição
                x += 5; // x = x + 5;
                x -= 1; // x = x - 1;
                x *= 10; // x = x * 10;
                x /= 2; // x = x / 2;
            }



            static void Logico(string[] args)
            {
                //&& = E : Se X For Maior que 25 E X For Menor que 40
                //|| = OU : Se X For Maior que 25 OU X For Menor que 40
                //! = Negação : Se X NÃO For Menor que 25

                int x = 12;
                bool entre = (x > 25) && (x < 40);//False
                bool ou = (x > 25) || (x < 40); //True
                bool negacao = !(x < 25); //False
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AulaString
{
    internal class AulaStringBuilder
    {
        static void Main(string[] args)
        {
            var texto = new StringBuilder();
            texto.Append("Este");
            texto.Append(" texto é ");
            texto.Append("um teste");

            texto.ToString();//Texto acima não é uma string e sim uma StringBuilder
            //É Preciso Converter para uma string
            Console.WriteLine(texto);//Console == Este texto é um teste
        }
    }
}
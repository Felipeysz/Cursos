using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrientaçãoObject_RalfLima
{
    internal class FileName
    {
        static void Main(string[] args)
        {
            //Exemplo 1
            Usuario1 user1 = new Usuario1();
            //Objeto = Exibe A Menssagem
            user1.MenssagemUser1();



            //Exemplo 2
            Usuario2 user2 = new Usuario2();

            user2.nome = "Lucas Marcelo";
            user2.idade = 23;
            user2.dataNasc = "01/01/2000";
            //Objeto = Exibe A Menssagem
            user2.MenssagemUser2();
        }
    }
}

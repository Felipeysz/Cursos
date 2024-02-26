using System;

namespace StringAula
{
    class String
    {
        static void Main0(string[] args)
        {
            var id = Guid.NewGuid();//Gera um Conjunto de Números e Letras
            id.ToString();//Transformando em String Opcional
            //id = new Guid(""); //Posso Colocar Um Guid Especifico Dentro Desse New Guid("")
            Console.WriteLine(id);

            if(id == Guid.NewGuid())//Posso Usar em IF / While / For 

            Console.WriteLine(id.ToString().Substring(0, 8));//Pegando Somente os 8 Primeiros Caracteres
        }
    }
}

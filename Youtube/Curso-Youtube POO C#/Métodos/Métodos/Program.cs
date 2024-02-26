using System;

//Posso Criar Metodos com o mesmo nome mas devem ter parametros Diferentes

namespace Metodos
{
    class Pessoa
    {
        //Método01
        public void Apresentar()
        {
            Console.WriteLine("Teste");
        }
        //Método02
        public void Apresentar(string nome)
        {
            Console.WriteLine("Olá " + nome);
        }
        //Método03
        public void Apresentar(string nome,int idade)
        {
            Console.WriteLine("Olá " + nome + " voçê tem " + idade+ " anos");
        }
    }
}
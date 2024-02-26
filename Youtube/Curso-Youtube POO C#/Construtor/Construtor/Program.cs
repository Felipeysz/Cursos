using System;

namespace Construtor
{
    class Program
    {
        static void Main(string[] args)
        {
            Pessoa p = new Pessoa();//Construtor Executado!!!
            Pessoa p2 = new Pessoa("Felipe");//Olá Felipe
        }
    }
}

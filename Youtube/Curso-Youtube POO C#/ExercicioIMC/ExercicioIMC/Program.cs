using System;
using System.Diagnostics;
using System.Linq.Expressions;
using System.Runtime.InteropServices;

namespace Project
{
    class Program
    {
        static void Main(string[] args)
        {
            Pessoa p = new Pessoa();

            p.Nome = "Luis Felipe";
            p.Altura = 1.72;
            p.Peso = 64;

            p.SeuIMC();

        }
    }
}

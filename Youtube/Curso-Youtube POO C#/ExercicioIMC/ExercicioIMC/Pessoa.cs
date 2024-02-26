using System;

namespace Project
{
internal class Pessoa
{
        public string Nome = "";
        public double Altura;
        public double Peso;
        public double IMC() => Peso / (Altura * Altura);
        public void SeuIMC()
    {
            Console.WriteLine($"{Nome} Seu IMC:{IMC().ToString("F")}"); 
            switch (IMC())
        {
            case < 18.5: Console.WriteLine("Você Está Abaixo do Peso"); break;
            case < 25: Console.WriteLine("Você Está com o Peso Normal"); break;
            case < 30: Console.WriteLine("Você Está com o Acima do Peso"); break;
            case < 35: Console.WriteLine("Você Está com o Obesidade I"); break;
            case < 40: Console.WriteLine("Você Está com o Obesidade II"); break;
            case >= 40: Console.WriteLine("Você Está com o Obesidade III"); break;
            default: Console.WriteLine($"Número Invalido"); break;

        }
    }
}

}
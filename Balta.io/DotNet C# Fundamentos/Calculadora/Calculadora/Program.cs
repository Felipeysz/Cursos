using System;

namespace ProjectCalculator
{
    internal class Calculator
    {
        static void Main (string[] args)
        {
            Menu();
        }

        static void Menu()
        {
            Console.Clear();

            Console.WriteLine("O que Deseja Fazer");
            Console.WriteLine("1 - Soma");
            Console.WriteLine("2 - Subtração");
            Console.WriteLine("3 - Divisão");
            Console.WriteLine("4 - Multiplicação");
            Console.WriteLine("5 - Sair");

            Console.WriteLine("---------------");

            Console.WriteLine("Selecione Uma Opção: ");
            short resultado = short.Parse(Console.ReadLine());

            switch (resultado)
            {
                case 1: Soma(); break;
                case 2: Subtracao(); break;
                case 3: Divisao(); break;
                case 4: Multiplicacao(); break;
                case 5: System.Environment.Exit(0); break;
                default: Menu(); break;
            }

        }
        static void Soma()
        {
            Console.Clear();
            Console.WriteLine("Primeiro Valor: ");
            float number1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Segundo Valor: ");
            float number2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");

            float resultado = number1 + number2;
            Console.WriteLine($"O Resultado da Soma é: {resultado}");
            Console.ReadKey();
            Menu();
        }

        static void Subtracao()
        {
            Console.Clear();
            Console.WriteLine("Primeiro Valor: ");
            float number1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Segundo Valor: ");
            float number2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");

            float resultado = number1 - number2;
            Console.WriteLine($"O Resultado da Subtração é: {resultado}");
            Console.ReadKey();
            Menu();
        }

        static void Divisao()
        {
            Console.Clear();
            Console.WriteLine("Primeiro Valor: ");
            float number1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Segundo Valor: ");
            float number2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");

            float resultado = number1 / number2;
            Console.WriteLine($"O Resultado da Divisão é: {resultado}");
            Console.ReadKey();
            Menu();
        }

        static void Multiplicacao()
        {
            Console.Clear();
            Console.WriteLine("Primeiro Valor: ");
            float number1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Segundo Valor: ");
            float number2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");

            float resultado = number1 * number2;
            Console.WriteLine($"O Resultado da Multiplicação é: {resultado}");
            Console.ReadKey();
            Menu();
        }
    }
}
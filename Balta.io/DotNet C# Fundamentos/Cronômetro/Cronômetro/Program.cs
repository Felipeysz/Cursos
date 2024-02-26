using System;
using System.Threading;

namespace CronometroProject
{
    class Cronometro
    {
        static void Main(string[] args)
        //Escreva Quantos Segundos Deseja Contar dentro do Start
        {
            Menu();
        }

        static void Menu()
        {
            Console.Clear();
            Console.WriteLine("S = Segundos => 10s = 10 Segundos");
            Console.WriteLine("M = Minuto => 1m = 1 Minutos");
            Console.WriteLine("0 = Sair");
            Console.WriteLine("Quanto Tempo Deseja Contar?");

            string data = Console.ReadLine().ToLower(); //toLower Deixa tudo em Minusculo
            char type = char.Parse(data.Substring(data.Length - 1, 1)); //Pegando O Ultimo Caracteres
            int time = int.Parse(data.Substring(0, data.Length - 1)); //Pegando Todos os Caracteres -1
            int multiplier = 1; //Começa sempre em Segundos
            
            if (type == 'm') //Caso Seja M Sera Alterado Pra minutos
                multiplier = 60;

            if (time == 0)
                System.Environment.Exit(0);

            PreStart(time * multiplier);
        }

        static void PreStart(int time)
        {
            Console.Clear();
            Console.WriteLine("Ready...");
            Thread.Sleep(1000);
            Console.WriteLine("Set...");
            Thread.Sleep(1000);
            Console.WriteLine("Go...");
            Thread.Sleep(2000);

            Start(time);
        }

        static void Start(int time)
        {
            int currentTime = 0;            
            while (currentTime != time)
            {
                Console.Clear();
                currentTime++;
                Console.WriteLine(currentTime);
                Thread.Sleep(1000); //Espera de 1 Segundo
            }

            Console.Clear();
            Console.WriteLine("Cronômetro Finalizado... Retornando ao Menu");
            Thread.Sleep(1500);// Espera de 2 segundos e meio para Voltar ao Menu
            Menu();
        }
    }
}
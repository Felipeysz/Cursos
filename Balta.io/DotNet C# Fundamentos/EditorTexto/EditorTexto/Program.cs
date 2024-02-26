using System;
using System.IO; //Usando Junto com o StreamWriter
using System.ComponentModel.Design;

namespace EditorTextoProject
{
    class EditorText
    {
        static void Main(string[] args)
        {
            Menu();

        }

        static void Menu()
        {
            Console.Clear();
            Console.WriteLine("O que deseja Fazer?");
            Console.WriteLine("1 - Abrir Arquivo");
            Console.WriteLine("2 - Criar Novo Arquivo");
            Console.WriteLine("0 - Sair");

            short option = short.Parse(Console.ReadLine());

            switch (option)
            {
                case 0:System.Environment.Exit(0); break;
                case 1:; Abrir(); break;
                case 2: Editar(); break;
                default: Menu(); break;
            }
        }

        static void Abrir()
        {
            Console.Clear();
            Console.WriteLine("Qual o Caminho do Arquivo?");
            string caminhoArquivo = Console.ReadLine();

            using (var arquivo = new StreamReader(caminhoArquivo))
            {
                string text = arquivo.ReadToEnd();
                Console.WriteLine(text);
            }

            Console.WriteLine("");
            Console.ReadLine();
            Menu();
        }

        static void Editar()
        {
            Console.Clear();
            Console.WriteLine("Digite Seu Texto Abaixo (ESC para sair)");
            Console.WriteLine("---------------");
            string text = " ";

            do //Faça Isso Enquanto o Usuario
            {
                text += Console.ReadLine();
                text += Environment.NewLine;//Quebrando a linha no fim de cada leitura
            }
            while (Console.ReadKey().Key != ConsoleKey.Escape);//Nâo Pressionar a tecla Escape == ESC

            Salvar(text);
        }

        static void Salvar(string text)
        {
            Console.Clear();
            Console.WriteLine(" Qual Caminho para Salvar o Arquivo?");
            var caminhoArquivo = Console.ReadLine();
            using (var arquivo = new StreamWriter(caminhoArquivo))
            {
                arquivo.Write(text);

                Console.WriteLine($"Arquivo {caminhoArquivo} Salvo com Sucesso");
                Console.ReadLine();
                Menu();
            }
        }
    }
}
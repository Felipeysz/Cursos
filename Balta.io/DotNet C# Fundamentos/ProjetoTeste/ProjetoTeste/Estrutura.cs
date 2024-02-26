using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Estruturas
{
    class Estruturas
    {
        public static void Main5(string[] args)
        {

            //Precisamos ultilizar == Para Comparar
            var idade = 17;
            var ano = 2006;
            var anoatual = 2023;
            var maiorIdade = 21;
            var idadeMaximo = 65;

            Console.WriteLine("Digite Seu Nome");
            var seuNome = Console.ReadLine();

            //Exemplo 1

            if (idade + ano == anoatual && anoatual - ano == idade)
            {
                Console.WriteLine("Resultado Correto: " + seuNome);
            }
            else if (idade + ano == anoatual && anoatual - ano == idade)
            {
                Console.WriteLine("Resultado Errado: " + seuNome);
            }
            else
                Console.WriteLine("Somente Pra Deixar de Exemplo");


            //Exemplo 2

            if (idade >= maiorIdade && idade <= idadeMaximo)
            {
                Console.WriteLine("Pode Entrar: " + seuNome);
            }
            else
                Console.WriteLine("Não Pode Entrar: " + seuNome);

            //Exemplo 3

            if (idade > maiorIdade || idade == maiorIdade) // === (idade >= maiorIdade)
            {
                Console.WriteLine("Pode Entrar: " + seuNome);
            }
            else
                Console.WriteLine("Não Pode Entrar: " + seuNome);
        }


        static void CondicionalSwitch(string[] args)
        {
            //OBS: case === if | default === else
            //Podemos ter varios case, mas somente 1 default
            string nome = "Felipe";
            int valor1 = 25;
            int valor2 = 10;
            int resultado = valor1 + valor2;

            //Exemplo 1

            switch (nome)
            {
                case "Joao": Console.WriteLine("Não é o cara!"); break;
                case "Marcelo": Console.WriteLine("Não é o cara!"); break;
                case "André": Console.WriteLine("Não é o cara!"); break;
                case "Felipe": Console.WriteLine("Esse é o Cara!"); break;
                default: Console.WriteLine("Não Encontrei!"); break;
            }

            switch (resultado)
            {
                case 05: Console.WriteLine("Resultado Incorreto, O Valor é: " + resultado); break;
                case 15: Console.WriteLine("Resultado Incorreto, O Valor é: " + resultado); break;
                case 25: Console.WriteLine("Resultado Incorreto, O Valor é: " + resultado); break;
                case 35: Console.WriteLine("Resultado Correto, O Valor é: " + resultado); break;
                default: Console.WriteLine("O Número não foi encontrado..."); break;
            }
        }

        static void CondicionalFor(string[] args)
        {
            //OBS: For === Contador de Números

            //Exemplo 1

            for (int contar = 0; contar <= 5; contar++) //Conta de 0 a 5
                Console.WriteLine(contar);

            //Exemplo 2

            for (int contar = 1; contar <= 5; contar++) //Conta de 1 a 5
                Console.WriteLine(contar);

            //Exemplo 3

            for (int contar = 0; contar < 5; contar++) //Conta de 0 a 4
                Console.WriteLine(contar);

            //Exemplo 4

            for (int contar = 5; contar >= 0; contar--) //Conta de 5 a 0
                Console.WriteLine(contar);
        }

        static void RepeticaoWhile(string[] args)
        {
            //OBS: O While Faz a Conta Primeiro E Depois Exibe O resultado
            int valor = 0;

            //Exemplo 1

            //Conta de 0 a 5
            //Exibe de 0 a 5 na tela
            while (valor <= 5)
            {
                Console.WriteLine(valor);
                valor++; //Caso Não Coloque o ++ Ficara Contando 0 Infinitamente
            }

            //Exemplo 2

            //Conta de 0 a 5
            //Exibe de 1 a 6 na tela Estamos Incrementando Valor antes de Aparecer na tela
            while (valor <= 5)
            {
                valor++;
                Console.WriteLine(valor);
            }

            //Exemplo 3

            //Infinito
            while (true)
            {
                valor++;
                Console.WriteLine(valor);
            }
        }

        static void RepeticaoDOWhile(string[] args)
        {
            //OBS: O DOWhile Faz o resultado Primeiro E Depois a Conta
            var valor = 0;

            do
            {
                Console.WriteLine(valor);
                valor++;
            } while (valor <= 5);
        }
    }
}

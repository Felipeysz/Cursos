using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AulaString
{
    internal class Comparação
    {
        static void Main2(string[] args)
        {
            var texto = "Este Texto é um Testando";
            

            //Exemplo == 1
            //Começa Com...
            Console.WriteLine(texto.StartsWith("Este"));// == True
            Console.WriteLine(texto.StartsWith("este", StringComparison.OrdinalIgnoreCase));// == True
            Console.WriteLine(texto.StartsWith("este"));// == False

            //Termina Com...
            Console.WriteLine(texto.EndsWith("Testando"));// == True
            Console.WriteLine(texto.EndsWith("testando", StringComparison.OrdinalIgnoreCase));// == True
            Console.WriteLine(texto.EndsWith("testando"));// == False



            //Exemplo == 2
            //Explicação do Codigo Abaixo
            //Procura se a essa palavra ou mais palavras Dentro Do Texto
            Console.WriteLine(texto.Contains("Testando"));// == True
            Console.WriteLine(texto.Contains("testando"));// == False
            //Ignorando O Formato da Letra
            Console.WriteLine(texto.Contains("Testando", StringComparison.OrdinalIgnoreCase));// == true
            Console.WriteLine(texto.Contains("testando", StringComparison.OrdinalIgnoreCase));// == true
            //Console.WriteLine(texto.Contains(null));// == Error no Console



            //Exemplo == 3
            //Explicação do Codigo Abaixo
            //Se tiver alguma letra diferente ele ira retornar um Número
            Console.WriteLine(texto.CompareTo("Testando"));// == 0
            Console.WriteLine(texto.CompareTo("testando"));// == 1



            //Exemplo == 4
            //O Objeto Tem que ser Igual
            //Pode ser Usado Com Outros Tipos mas precisa ser uma comparação do Mesmo Tipo (Int Equals Int)
            Console.WriteLine(texto.Equals("Este Texto esta Testando"));// == True
            Console.WriteLine(texto.Equals("Este Texto ESTA Testando"));// == False
            Console.WriteLine(texto.Equals("Este Texto ESTA Testando",StringComparison.OrdinalIgnoreCase));// == True

            var teste = 33;
            teste.Equals(33);// == True
            teste.Equals(35);// == False

            //Indice
            Console.WriteLine(texto.IndexOf("é"));// == 12
            Console.WriteLine(texto.IndexOf("um"));// == 14 (É Pega a Primeira Posição)
            Console.WriteLine(texto.LastIndexOf("o"));//Procurar o Ultimo (O) == 24

            //Conversor de Texto

            //Maiusculo
            Console.WriteLine(texto.ToUpper());// == ESTE TEXTO É UM TESTANDO
                                               
            //Minusculo
            Console.WriteLine(texto.ToLower());// == este texto é um testando

            //Inserir Texto
            //Posição 5 Colocou a Palavra Adicionei
            Console.WriteLine(texto.Insert(5, "Adicionei"));

            //Remover Palavras do Texto
            Console.WriteLine(texto.Remove(5, 9));//Removeu a palavra Adicionei

            //Quantidade de Caracteres
            Console.WriteLine(texto.Length);

            //Substituir String
            //OBS:Substitui Toda a String
            //OBS:Caso Tente Substituir uma palavra inexistente O texto Não Sera Alterado
            Console.WriteLine(texto.Replace("e","X"));// == EstX TXxto é um TXstando
            Console.WriteLine(texto.Replace("AAAAAA", "X"));// == Este Texto é um Testando

            //Split Dividi sua String
            var dividir = texto.Split(" ");
            Console.WriteLine(dividir[0]);
            Console.WriteLine(dividir[1]);
            Console.WriteLine(dividir[2]);
            Console.WriteLine(dividir[3]);
            Console.WriteLine(dividir[4]);


            //Filtando Palavras
            var resultado = texto.Substring(5, 5);//== texto
            var resultado2 = texto.Substring(5, texto.LastIndexOf("o"));// == texto
            Console.WriteLine(resultado,resultado2);

            //Removedor de Espaços no Começo o No Final de Uma String
            //Bom pra usar em Formularios
            Console.WriteLine(texto.Trim());

            //Somente Começo
            Console.WriteLine(texto.TrimStart());
            //Somente Final
            Console.WriteLine(texto.TrimEnd());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MetodosFuncoes
{
    class MetodoseFuncoes
    {
        //Definição do Metodo
        //Retorna uma String e recebe varios Parametros
        public static string Main4(string nome,string sobrenome)
        {
            return nome + " " + sobrenome;
        }

        static void Teste(string[] args) //Isso é um Metodo
        {
            //Invocação do metodo
            //Armazena o resultado em uma variavel

            var nome = Main4("Luis", "Felipe");

            //Imprime na Tela
            Console.WriteLine(nome);
        }
    }

    internal class MetodosAula
    {
        //OBS: Sempre deve Retornar Algum Resultado

        //Exemplo 1
        static void Teste2(string[] args)
        {
            MeuMetodo();

            string nome = RetornaNome("Luis Felipe ", "Santos de Santana ",17);
        }

        static void MeuMetodo()
        {
            Console.WriteLine("C# é Legal!");
        }

        //Exemplo 2

        //Todo Parametro é Obrigatorio ser Usado Caso Adicionado
        //Caso eu Queira Definir um Valor Direto nos Parametros ele sera Opcional(So Sera usado se não tiver declarado nada la em cima)
        //Parametros Opcionais devem vim depois de parametros sem opção default
        static string RetornaNome(string nome,string sobrenome,int idade) //Todo Parametro é Obrigatorio ser Usado Caso Adicionado
        {
            return nome + sobrenome + "tem " + idade.ToString() + " Anos";
        }
    }
}

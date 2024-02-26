using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TiposCurso{
    //Normalmente � Ultilizado Int Para N�meros Inteiros
    //Normalmente � Ultilizado Double Para N�meros Flutuantes
    class TypeNumbersInteiros {
        public static void Main2(string[] args)
        {
            string valueByte = "0/255";
            string valueSbyte = "-128/127";
            string valueShort = "-32.768/32.767";
            string valueUshort = "0/65.535";
            string valueInt = "-2.147.483.648/2.147.483.647";
            string valueUint = "0/4.294.967.295";
            string valueLong = "-9.223.372.036.854.775.808/9.223.372.036.854.775.807";
            string valueUlong = "0/18.446.744.073.709.551.615";
        }
        
    }


    class TypeExNumbersFlutuantes
    {
        /*
        float = (Precisamos Ultilizar o f depois de digitar o n�mero)
        double = (N�o precisamos Ultilizar nada depois de digitar o n�mero)
        decimal = (Precisamos Ultilizar o m depois de digitar o n�mero)
         */
    }


    class TypeVerdadeiroOuFalso
    {
       //Ultilizaremos = BOOL
    }


    class TypeCHAReString
    {
        //char = So Podera Ser Armazenado 1 Letra e Tera Que OBRIGATORIAMENTE Ser Em Aspas Simples = ''
        //String  = Podera Ser Armazenado Quantas Letras Necess�rio OBRIGATORIAMENTE Tera Que Ser Ultilizado Aspas Duplas = ""
    }


    class TypeVAR
    {
        //A Atribui��o do var pode ser feita para qualquer ocasi�o mas depois que definir ele n�o poderar ser trocado para outro tipo
        //EX var idade = 25;| idade = "Felipe; Ira Causar um Error.
    }


    class TypeObject
    {
        static void Main2(string[] args) {
            //Essa Variavel � Usada Normalmente Quando N�o Se Tem Certeza do Tipo Que Sera Usado
            //EVITE USAR
            object meuNome = "Luis"; //Tipo Object
            object minhaIdade = 17; //Tipo Object
        }

    }


    class NullType{
        static void Main3(string[] args)
        {
            //Valores Nulos devem ter o ? Apos A Declara��o do Tipo
            int? idade = null;
            Console.WriteLine(idade);
        }
        
    }

    class Alias
    {
        static void Alias1(string[] args)
        {
            //OBS: Preferencialmente Use Os Alias (Praticamente uma Abrevia��o)
            int idade = 17; //alias
            Int32 idade2 = 17; //tipo
        }
    }

    class ValuePadr�o
    {
        static void ValuePadrao(string[] args)
        {
            //OS TIPOS DE DECLARA��O, VEM COM VALORES DECLARADO DE BASE
            int INT = 0;
            float FLOAT = 0;
            decimal DECIMAL = 0;
            bool BOOL = false;
            char CHAR = '\0';
            string STRING = "";

        }
    }

    class Convers�oImplicita
    {
        static void Convers�o(string[] args)
        {
            //CONVERS�ES IMPLICITAS ESCONDEM O TIPO (INT/DOUBLE/FLOAT/DECIMAL)
            //SO � POSSIVEL TRANSFORMAR FLOAT EM INT
            //INT EM FLOAT ENTRARA EM ERRO POIS  INT � UM NUMERO COM MENAS PRECIS�O
            float valor = 25.8f;
            int outro = 25;
            valor = outro;
        }
    }
    
    class Convers�oExplicita
    {
        static void Convers�o2(string[] args)
        {
            //OBS:EVITAR ULTILIZAR ESSE TIPO DE CONVERS�O POIS SO SERA POSSIVEL ACHAR O
            //ERRO NO MOMENTO QUE RODAR O CODIGO ASSIM ATRASANDO A ENTREGA DELE
            int inteiro = 100;
            uint inteiroSemSinal = (uint)inteiro;
            Console.WriteLine(inteiro);
        }
    }

    class PARSE
    {
        static void PARSE1(string[] args)
        {
            //CONVERTE APENAS STRING
            //MSM PROBLEMA DA CONVERS�O EXPLICITA
            //SO � POSSIVEL ACHAR O ERRO RODANDO O CODIGO
            int inteiro = int.Parse("100");
        }
    }

    class CONVERT
    {
        static void CONVERT1(string[] args)
        {
            int inteiro = Convert.ToInt32("100");
        }
    }

    class Program
    {
        static void Programa(string[] args)
        {
            int inteiro = 100;
            float real = 25.5f;

            //ERROR inteiro = real;
            //real = inteiro;   Resultado:100.0f
            //inteiro = (int)real;    Resultado:25 OBS:Sempre Arredonda Para Baixo

            //string valorReal = real.ToString(); ERROR
            //inteiro = int.Parse(valorReal); ERROR

            inteiro = Convert.ToInt32(real);//O Convert Faz o Arredondamento Correto
            //25.5 = 25
            //25.8 = 26

            //OBS Qualquer N�mero Diferente de 0 Para o Bolean � Igual a TRUE
        }
    }
}
using System;

/*
public  -> Atributos e Métodos visiveis em qualquer classe
private -> Atributos e Métodos visiveis apenas na classe onde são criados
protected -> Atributos e Métodos visiveis em classes onde são criados ou herdados
*/

//Pode ser Usado Tanto Como Qualquer Type:Int,Float,Boolean,String,Var
//Pode ser Usado Com Classes somente os (Public, )
//Pode ser usado no Static void = (public type Main, private type Main, protected type Main)

namespace OrientaçãoObject_RalfLima
{
    class Usuario1
    {
        //Atributos
        public string nomeCompleto = "Luis Felipe Santos de Santana";
        public int idadeAtual = 17;
        public string dataNasc = "10/02/2006";

        //Método
        public void MenssagemUser1() {
            Console.WriteLine($"Usuario 1 tem o Nome:{nomeCompleto} idade:{idadeAtual} e nasceu em {dataNasc}");
        }
    }

    class Usuario2
    {
        //Atributos
        public string nome;
        public int idade;
        public string dataNasc;

        //Métodos
        public void MenssagemUser2() {
            Console.WriteLine($"Usuario 2 tem o Nome:{nome} idade:{idade} e nasceu em {dataNasc}");
        }
    }
}


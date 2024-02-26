using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Herança
{
    class Colaborador : Pessoa //Assim todos o Métodos Protected ou Public podem Ser Acessados (Herança)
    {
        //Atributos
        private double salario;

        //Construtor

        public Colaborador(string nome,int idade,double salario)
        {
            this.nome = nome;//Esses Atributo So Podem Ser Usados Por Causa de : Pessoa em class Colaborador
            this.idade = idade;//Esses Atributo So Podem Ser Usados Por Causa de : Pessoa em class Colaborador
            this.salario = salario;//Esse Atributo Foi Criado em class Colaborador

            mensagemPessoa();
            mensagemColaborador();
        }
        //Método

        private void mensagemColaborador()
        {
            Console.WriteLine($"Salario:{salario}");
        }
    }
}

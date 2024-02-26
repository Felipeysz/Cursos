using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ExercicioEscolar
{
    class Aluno
    {
        public string nome;
        public string nomeRespon1;
        public string nomeRespon2;
        public int idade;
        public string dateNasc;
        public string cpf;
        public int numberMatricule;
        public double nota1, nota2, nota3;
        public double mediaAluno()
        {
            return (nota1 + nota2 + nota3) / 3;
        }
        public string situaçaoEscolar(double media)
        {
            return media >= 15 ? "Aprovado" : "Reprovado";
        }

        public void mensagemEscolar()
        {
            //Obter Media
            double obterMedia = mediaAluno();

            //Obter Situação
            string situacaoAluno = situaçaoEscolar(obterMedia);

            Console.WriteLine($"{nome} está {situacaoAluno} com a média de {obterMedia}");
        }
    }
}

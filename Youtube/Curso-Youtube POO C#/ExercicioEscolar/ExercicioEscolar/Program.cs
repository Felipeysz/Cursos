using System;

namespace ExercicioEscolar
{
    class Escola
    {
        static void Main(string[] args)
        {
            Aluno a = new Aluno();

            a.nome = "Felipe";
            a.nota1 = 7;
            a.nota2 = 7;
            a.nota3 = 7;
            a.mensagemEscolar();
        }
    }
}
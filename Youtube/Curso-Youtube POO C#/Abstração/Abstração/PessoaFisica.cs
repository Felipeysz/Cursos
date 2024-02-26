using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstração
{
    class PessoaFisica : Padrao //Somente Usar  : Padrão se Implementar o Codigo Obrigatorio = Abstract
    {
        //Método Obrigatorio
        public override void TaxaEmprestimo(double valor) //Override = Sobrescrever Metodo = Fazer algo por "cima" do metodo
        {
            Console.WriteLine($"Taxa de Emprestimo Para Pessoa Fisica R$:{valor * 0.1}");
        }
    }
}

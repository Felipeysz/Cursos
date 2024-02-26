using Abstração;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracao
{
    class Program
    {
        static void Main(string[] args) {

            PessoaFisica pf = new PessoaFisica();
            pf.TaxaEmprestimo(1000);

            PessoaJuridica pj = new PessoaJuridica();
            pj.TaxaEmprestimo(1000);
        }
    }
}

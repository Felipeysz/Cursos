using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Get___Set
{
    class Pessoa
    {
        //Atributo Nome
        private string nome;

        // Get e Set

        public string Nome
        {
            get { return nome; }//Caso eu tire o Get Não Poderei Colocar Nenhuma Formação
            set {  nome = value; }
        }
    }
}

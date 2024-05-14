using System.ComponentModel.DataAnnotations;

namespace ControleDeContatos.Models
{
    public class AlterarSenhaModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Digite a Senha Atual do Usuario")]
        public string SenhaAtual { get; set; }

        [Required(ErrorMessage = "Digite a Nova Senha do Usuario")]
        public string NovaSenha { get; set; }

        [Required(ErrorMessage = "Confirme a Nova Senha do Usuario")]
        [Compare("NovaSenha", ErrorMessage = "Senha não confere com a nova senha")]
        public string ConfirmarNovaSenha { get; set; }
    }
}

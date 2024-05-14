using System.ComponentModel.DataAnnotations;

namespace ControleDeContatos.Models
{
    public class ContatoModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Digite o Nome do Contato")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Digite o Email do Contato")]
        [EmailAddress(ErrorMessage = "O Email informado não é valido!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Digite o Celular do Contato")]
        [Phone(ErrorMessage = "O Celular Informado Não é Valido!")]
        public string Celular { get; set; }

        public int? UsuarioId { get; set; }

        public UsuarioModel Usuario { get; set; }
    }
}

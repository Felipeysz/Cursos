using System.ComponentModel.DataAnnotations.Schema;

namespace GoogleMapsProject.Models
{
    [Table("OnibusTable")]
    public class OnibusModel
    {
        public int id { get; set; }
        public double NumeroOnibus { get; set; }
        public string NomeRota { get; set; }
        public string NomeMotorista { get; set; }
        public string PlacaOnibus { get; set; }
        public string EstacaoInicio { get; set; }
    }
}

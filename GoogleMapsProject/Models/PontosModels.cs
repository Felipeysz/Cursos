using System.ComponentModel.DataAnnotations.Schema;

namespace GoogleMapsProject.Models
{
    [Table("PontosTable")]
    public class PontosModels
    {
        public int Id { get; set; }
        public double lat { get; set; }
        public double lon { get; set; }
        public string loc { get; set; }
    }
}

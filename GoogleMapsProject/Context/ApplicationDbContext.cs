using Microsoft.EntityFrameworkCore;

namespace GoogleMapsProject.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<PontosModels> Pontos { get; set; }
        public DbSet<OnibusModel> Onibus { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using PrimeiraAPI.Data.Map;
using PrimeiraAPI.Models;

namespace PrimeiraAPI.Data
{
    public class SistemadeTarefasDBContex : DbContext
    {
        public SistemadeTarefasDBContex(DbContextOptions<SistemadeTarefasDBContex> options)
            : base(options)
        {
            
        }

        public DbSet<UsuarioModel> Usuarios { get; set; } //Cria Tabela Usuarios
        public DbSet<TarefaModel> Tarefas { get; set; } //Cria Tabela Tarefas

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new TarefaMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}

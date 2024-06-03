using Microsoft.EntityFrameworkCore;
using GoogleMapsProject.Models;

namespace GoogleMapsProject
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Adicionar serviços ao contêiner.
            builder.Services.AddControllersWithViews();

            // Configurar o DbContext com a string de conexão
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            var app = builder.Build();

            // Configurar o pipeline de requisições HTTP.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // O valor padrão do HSTS é 30 dias. Você pode querer mudar isso para cenários de produção, veja https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            // Mapear as rotas para as controllers
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=PontosMvc}/{action=Index}/{id?}");

            // Mapear as rotas para as APIs
            app.MapControllers();

            app.Run();
        }
    }
}

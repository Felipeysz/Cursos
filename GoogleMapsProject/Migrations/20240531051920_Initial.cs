using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoogleMapsProject.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OnibusTable",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroOnibus = table.Column<double>(type: "float", nullable: false),
                    NomeRota = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NomeMotorista = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlacaOnibus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EstacaoInicio = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OnibusTable", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PontosTable",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    lat = table.Column<double>(type: "float", nullable: false),
                    lon = table.Column<double>(type: "float", nullable: false),
                    loc = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PontosTable", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OnibusTable");

            migrationBuilder.DropTable(
                name: "PontosTable");
        }
    }
}

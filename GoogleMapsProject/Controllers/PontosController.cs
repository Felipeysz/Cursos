using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GoogleMapsProject.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoogleMapsProject.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class PontosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PontosController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/Pontos")]
        public async Task<ActionResult<IEnumerable<PontosModels>>> GetPontos()
        {
            return await _context.Pontos.ToListAsync();
        }

        [HttpGet("{id}")]
        [Route("api/Pontos/{id}")]
        public async Task<ActionResult<PontosModels>> GetPonto(int id)
        {
            var ponto = await _context.Pontos.FindAsync(id);

            if (ponto == null)
            {
                return NotFound();
            }

            return ponto;
        }

        [HttpPost]
        [Route("api/Pontos")]
        public async Task<ActionResult<PontosModels>> PostPonto(PontosModels ponto)
        {
            _context.Pontos.Add(ponto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPonto), new { id = ponto.Id }, ponto);
        }

        [HttpPut("{id}")]
        [Route("api/Pontos/{id}")]
        public async Task<IActionResult> PutPonto(int id, PontosModels ponto)
        {
            if (id != ponto.Id)
            {
                return BadRequest();
            }

            _context.Entry(ponto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PontoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        [Route("api/Pontos/{id}")]
        public async Task<IActionResult> DeletePonto(int id)
        {
            var ponto = await _context.Pontos.FindAsync(id);
            if (ponto == null)
            {
                return NotFound();
            }

            _context.Pontos.Remove(ponto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PontoExists(int id)
        {
            return _context.Pontos.Any(e => e.Id == id);
        }
    }
}

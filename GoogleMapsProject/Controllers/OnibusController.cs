using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GoogleMapsProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GoogleMapsProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OnibusController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OnibusController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OnibusModel>>> GetOnibus()
        {
            return await _context.Onibus.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OnibusModel>> GetOnibus(int id)
        {
            var onibus = await _context.Onibus.FindAsync(id);

            if (onibus == null)
            {
                return NotFound();
            }

            return onibus;
        }

        [HttpPost]
        public async Task<ActionResult<OnibusModel>> PostOnibus(OnibusModel onibus)
        {
            _context.Onibus.Add(onibus);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOnibus), new { id = onibus.id }, onibus);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOnibus(int id, OnibusModel onibus)
        {
            if (id != onibus.id)
            {
                return BadRequest();
            }

            _context.Entry(onibus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OnibusExists(id))
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
        public async Task<IActionResult> DeleteOnibus(int id)
        {
            var onibus = await _context.Onibus.FindAsync(id);
            if (onibus == null)
            {
                return NotFound();
            }

            _context.Onibus.Remove(onibus);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OnibusExists(int id)
        {
            return _context.Onibus.Any(e => e.id == id);
        }
    }
}

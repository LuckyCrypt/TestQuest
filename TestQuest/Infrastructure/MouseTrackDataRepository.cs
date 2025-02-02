using TestQuest.Domain.Interfaces;
using TestQuest.Domain;
using TestQuest.Infrastructure;
using System.Threading.Tasks;

namespace TestQuest.Infrastructure
{
    public class MouseTrackDataRepository : IMouseTrackDataRepository
    {
        private readonly AppDbContext _context;

        public MouseTrackDataRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(MouseTrackData data)
        {
            await _context.MouseTrackData.AddAsync(data);
            await _context.SaveChangesAsync();
        }
    }
}

using Microsoft.EntityFrameworkCore;
using TestQuest.Domain;

namespace TestQuest.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<MouseTrackData> MouseTrackData { get; set; }
    }
}


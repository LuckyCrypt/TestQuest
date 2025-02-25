using Microsoft.EntityFrameworkCore;
using TestQuest.Entity.Tables;

namespace TestQuest.Entity
{
    public class PGDBContext : DbContext
    {
        public DbSet<Users> Users { get; set; }
        public DbSet<Tests> Tests { get; set; }
        public DbSet<Questions> Question { get; set; }
        public DbSet<Answers> Answer { get; set; }
        public DbSet<AnswersWorkers> AnswersWorker { get; set; }
        public DbSet<TestsCompleted> TestCompleted { get; set; }

        public PGDBContext(DbContextOptions options) : base (options) 
        {
        }

    }
}

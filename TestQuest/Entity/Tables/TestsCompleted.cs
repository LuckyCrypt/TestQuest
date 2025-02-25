

using System.ComponentModel.DataAnnotations;

namespace TestQuest.Entity.Tables
{
    public class TestsCompleted : Entity
    {
        [Required]
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public int TestID { get; set; }
        public int CreateUserID { get; set; }
        public Users User { get; set; }
        public Tests Test { get; set; }
        public ICollection<AnswersWorkers> AnswersWorkers { get; set; }

    }
}

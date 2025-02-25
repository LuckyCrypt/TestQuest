using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using TestQuest.Entity.Tables;
namespace TestQuest.Models.MyTests
{
    public class CreateTest
    {
        public int Id { get; set; }
        public List<Answers> Answers { get; set; }
        public List<AnswersWorkers> AnswersWorkers { get; set; }
        public List<Questions> Questions { get; set; }
        public Tests Tests { get; set; }
        public Users Users { get; set; }

    }
}

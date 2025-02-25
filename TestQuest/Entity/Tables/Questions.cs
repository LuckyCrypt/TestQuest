

using System.ComponentModel.DataAnnotations;

namespace TestQuest.Entity.Tables
{
    public class Questions : Entity
    {
        [Required(ErrorMessage = "Данное поле обязательно")]
        public string Text { get; set; }
        public int TypeQuest { get; set; } // Тип вопроса
        public DateTime ModifyDate { get; set; }
        public DateTime CreateDate { get; set; }


        public int TestID { get; set; }
         
        public Users User { get; set; }
        public Tests Test { get; set; }
        public ICollection<Answers> Answer { get; set; }
        public ICollection<AnswersWorkers> AnswerWorker { get; set; }
    }
}

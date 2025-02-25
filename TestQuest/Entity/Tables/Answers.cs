namespace TestQuest.Entity.Tables
{
    public class Answers : Entity
    {
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
        public int QuestionId { get; set; }
        public Questions Question { get; set; }

        public ICollection<AnswersWorkers> AnswersWorkers { get; set; }
    }
}

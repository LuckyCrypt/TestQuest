namespace TestQuest.Entity.Tables
{ 
    public class AnswersWorkers : Entity
    {
        public string Text { get; set; }
        public int TestCompletId { get; set; }
        public int QuestionId { get; set; }

        public TestsCompleted TestComplete { get; set; }
        public Questions Question { get; set; }
        public Answers Answers { get; set; }
    }
}

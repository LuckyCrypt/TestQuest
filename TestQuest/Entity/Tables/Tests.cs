
using System.ComponentModel.DataAnnotations;

namespace TestQuest.Entity.Tables
{
    public class Tests : Entity
    {
        [Required(ErrorMessage = "Данное поле обязательно")]
        public string Name { get; set; }
        public DateTime ModifyDate { get; set; }
        public DateTime CreateDate { get; set; }
        public int UserID { get; set; }// Внешний ключ к таблице Users
        public Users User { get; set; }
        public List<Questions>? Questions { get; set; }

    }
}

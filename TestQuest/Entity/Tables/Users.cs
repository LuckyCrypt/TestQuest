
using System.ComponentModel.DataAnnotations;

namespace TestQuest.Entity.Tables
{
    public class Users : Entity
    {
        [Required]
        public string Login { get; set; }
        public string Password { get; set; }
        // Навигационное свойство (для получения списка тестов, связанных с этим пользователем)

        public Users(string login, string password)
        {
            Login = login;
            Password = password;
        }
    }
}

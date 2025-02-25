using System.ComponentModel.DataAnnotations;

namespace TestQuest.Models.Account
{
    public class AccountViewModel
    {
        public LoginViewModel LoginViewModel { get; set; }


    }
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Данное поле обязательно")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Данное поле обязательно")]
        public string Password { get; set; }
    }


}

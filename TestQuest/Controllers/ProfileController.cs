using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


using TestQuest.Entity;


namespace TestQuest.Controllers
{
    [Authorize]    // Требуется аутентификация
    public class ProfileController : BaseController
    {
        private readonly PGDBContext _contextManager;
        public ProfileController(PGDBContext contextManager)
        {
            _contextManager = contextManager;
        }
        public async Task<IActionResult> Index()
        {
            // Получаем все продукты из базы данных

            // Передаем список продуктов в представление
            return View(await _contextManager.Tests.ToListAsync());
        }
        public async Task<IActionResult> Dashboard()
        
        {
/*            if (HttpContext.Session.GetString("Username") != null)
            {
                string username = HttpContext.Session.GetString("Username");
                ViewBag.WelcomeMessage = username;
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Account");
            }*/
            /* var user = await _userManager.GetUserAsync(User);
             if (user == null)
             {
                 return NotFound($"Невозможно загрузить пользователя с ID '{_userManager.GetUserId(User)}'.");
             }

             ViewData["Username"] = user.UserName;

             // Здесь можно получить другие данные профиля пользователя из базы данных
             // и передать их в View.*/

            return View();
        }
    }
}

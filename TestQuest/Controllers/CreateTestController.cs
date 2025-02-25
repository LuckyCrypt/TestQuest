using TestQuest.Entity;
using TestQuest.Entity.Tables;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestQuest.Models.MyTests;
using static System.Net.Mime.MediaTypeNames;


namespace TestQuest.Controllers
{

    [Authorize]
    public class CreateTestController : BaseController
    {
        private readonly PGDBContext _contextManager;

        public CreateTestController(PGDBContext contextManager)
        {
            _contextManager = contextManager;
        }
        public IActionResult Index()
        {
            return View("CreateTests");
        }


        [HttpPost]
        public IActionResult CreateTest(CreateTest createTest) // Модель Test будет автоматически заполнена данными из формы
        {
            createTest.Tests.CreateDate = DateTime.UtcNow;
            createTest.Tests.ModifyDate = DateTime.UtcNow;
            createTest.Tests.User = new Users("Lucky","2222");
            if (!ModelState.IsValid)
            {
/*                // Сохраняем тест, вопросы и ответы в базу данных
                _contextManager.Tests.Add(createTest.Tests);
                for (int i = 0; i < createTest.Questions.Count; i++)
                {
                    _contextManager.Question.Add(createTest.Questions[i]);
                }
                _contextManager.SaveChanges();*/

                return RedirectToAction("DashBoard", "Profile"); // Перенаправляем на главную страницу
            }

            // Если модель не валидна, возвращаем представление с ошибками
            return View("CreateTests");
        }
        [HttpGet]
        public IActionResult CreateTest()
        {
            var test = new Tests
            {
                Questions = new List<Questions>
            {
                new Questions
                {
                    Answer = new List<Answers>
                    {
                        new Answers(),
                        new Answers()
                    }
                }
            }
            };
            return View(test);
        }
    }
}

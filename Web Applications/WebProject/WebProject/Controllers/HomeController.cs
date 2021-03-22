using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebProject.Models;
using WebProject.Models.Home;

namespace WebProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [Route("/Students/")]
        public IActionResult Students()
        {
            StudentsViewModel studentsViewModel = new StudentsViewModel();

            studentsViewModel.Class = "Web Programming";

            studentsViewModel.Students.Add(new Student
            {
                FirstName = "Jason",
                LastName = "Bruno",
                StudentNumber = "1"
            });

            studentsViewModel.Students.Add(new Student
            {
                FirstName = "Stella",
                LastName = "Kayla",
                StudentNumber = "2"
            });

            studentsViewModel.Students.Add(new Student
            {
                FirstName = "Brendon",
                LastName = "Estol",
                StudentNumber = "3"
            });

            return View(studentsViewModel);
        }
    }
}

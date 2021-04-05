using StudentsList.Interfaces;
using StudentsList.Models.Students;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentsList.Services
{
    public class StudentService : IStudentService
    {
        private IList<StudentViewModel> studentList = new List<StudentViewModel> {
            new StudentViewModel() { StudentNumber = 1, FirstName = "Brendon", LastName = "Smith" },
            new StudentViewModel() { StudentNumber = 2, FirstName = "Stella", LastName = "Alvin" },
            new StudentViewModel() { StudentNumber = 3, FirstName = "Roy", LastName = "Brody" },
            new StudentViewModel() { StudentNumber = 4, FirstName = "Rick", LastName = "Trendy" },
            new StudentViewModel() { StudentNumber = 5, FirstName = "Lolla", LastName = "Bondy" }
        };

        public IList<StudentViewModel> GetStudents(string firstName, string lastName)
        {
            return studentList
                .Where(s => (s.FirstName == firstName || firstName == null)
                && ((s.LastName == lastName || lastName == null)))
                .ToList();
        }

        public StudentViewModel GetStudent(int studentNumber)
        {
            return studentList.Where(s => s.StudentNumber == studentNumber).FirstOrDefault();
        }
    }
}

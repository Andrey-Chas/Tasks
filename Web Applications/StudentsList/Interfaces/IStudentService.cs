using StudentsList.Models.Students;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentsList.Interfaces
{
    public interface IStudentService
    {
        IList<StudentViewModel> GetStudents(string firstName, string lastName);

        StudentViewModel GetStudent(int studentNumber);
    }
}

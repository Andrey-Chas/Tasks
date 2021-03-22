using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebProject.Models.Home
{
    public class StudentsViewModel
    {

        public StudentsViewModel()
        {
            Students = new List<Student>();
        }

        public string Class { get; set; }
        public List<Student> Students { get; set; }
    }
}

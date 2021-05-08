using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PhotoSite.Models
{
    public class Post
    {
        public int Id { get; set; }

        [DataType(DataType.Upload)]
        [Display(Name = "Upload photo")]
        [Required(ErrorMessage = "Please choose photo to upload")]
        public string File { get; set; }

        [Required]
        public string Name { get; set; }

        public string Email { get; set; }
        
        public string Comment { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "Date edited")]
        public DateTime Date { get; set; }
    }
}

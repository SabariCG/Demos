using System.ComponentModel.DataAnnotations;

namespace SOWRunRegistrationApp.Models
{
    public class Employee
    {
        [Range(0, int.MaxValue, ErrorMessage = "Please enter only valid Employee Number")]
        [Required(ErrorMessage = "Employee Number required")]
        public int EmpNo { get; set; }

        [DataType(DataType.Text, ErrorMessage = "Employee Name is not valid")]
        [Required(ErrorMessage = "Employee Name required")]
        public string EmpName { get; set; }

        [DataType(DataType.EmailAddress, ErrorMessage = "Email ID is not valid")]
        [Required(ErrorMessage = "Employee Email ID required")]
        public string EmpEmailID { get; set; }
    }
}
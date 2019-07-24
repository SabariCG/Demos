using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SOWRunRegistrationApp.Controllers
{
    public class EmployeesController : Controller
    {
        // GET: Employees
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Registration()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Registration(Models.Employee employee)
        {
            if(!ModelState.IsValid)
            {
                return View();
            }
            else
            {
                TempData["Employee"] = employee;
                return RedirectToAction("Acknowledgement");
            }
        }

        public ActionResult Acknowledgement()
        {
            return View((Models.Employee)TempData["Employee"]);
        }
    }
}
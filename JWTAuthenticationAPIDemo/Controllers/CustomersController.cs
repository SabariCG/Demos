using System.Web.Http;

using JWTAuthenticationAPIDemo.Auth;
using JWTAuthenticationAPIDemo.Models;
using JWTAuthenticationAPIDemo.Repository;

namespace JWTAuthenticationAPIDemo.Controllers
{
    [JwtAuthentication]
    public class CustomersController : ApiController
    {
        public IHttpActionResult GetAllCustomers()
        {
            return Ok(CustomersRepository.CustomersRepositoryInstance.GetAllCustomers());
        }

        [HttpGet]
        public IHttpActionResult GetCustomer(int id)
        {
            var customer = CustomersRepository.CustomersRepositoryInstance.GetCustomerById(id);

            if (customer == null)
            {
                return BadRequest("Customer: " + id + " is not found");
            }
            else
            {
                return Ok(customer);
            }
        }

        [HttpPost]
        public IHttpActionResult AddCustomer(Customer customer)
        {
            if (CustomersRepository.CustomersRepositoryInstance.AddCustomer(customer))
            {
                return Ok("Customer added successfully");
            }
            else
            {
                return BadRequest("Customer addition failed");
            }
        }

        [HttpPut]
        public IHttpActionResult UpdateCustomer(Customer customer)
        {
            if (CustomersRepository.CustomersRepositoryInstance.UpdateCustomer(customer))
            {
                return Ok("Customer updated successfully");
            }
            else
            {
                return BadRequest("Customer updation failed");
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteCustomer(int id)
        {
            if (CustomersRepository.CustomersRepositoryInstance.DeleteCustomer(id))
            {
                return Ok("Customer deleted successfully");
            }
            else
            {
                return BadRequest("Customer deletion failed");
            }
        }
    }
}

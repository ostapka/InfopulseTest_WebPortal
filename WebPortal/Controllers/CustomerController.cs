using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebPortal.Models;
using WebPortal.Util;

namespace WebPortal.Controllers
{
    [ApiController]
    [Route("api/customers")]
    public class CustomerController : Controller
    {
        ICustomerRepository repo;
        public CustomerController(ICustomerRepository repo)
        {
            this.repo = repo;
        }
        [HttpGet]
        public IEnumerable<ShowedCustomer> Get()
        {
            return repo.Get();
        }
        [HttpPost]
        public IActionResult Post(Customer customer)
        {
            if (ModelState.IsValid)
            {
                repo.Post(customer);
                return Ok(customer);
            }
            return BadRequest(ModelState);
        }
    }
}

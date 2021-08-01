using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<IEnumerable<ShowedCustomer>> Get()
        {
            return await repo.GetAsync();
        }
        [HttpPost]
        public async Task<IActionResult> Post(Customer customer)
        {
            if (ModelState.IsValid)
            {
                await repo.PostAsync(customer);
                return Ok(customer);
            }
            return BadRequest(ModelState);
        }
    }
}

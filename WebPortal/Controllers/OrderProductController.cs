using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebPortal.Models;
using WebPortal.Util;

namespace WebPortal.Controllers
{
    [ApiController]
    public class OrderProductController : Controller
    {
        IRepository repo;
        public OrderProductController(IRepository repo)
        {
            this.repo = repo;
        }
        
        [HttpGet("api/products")]
        public IEnumerable<Product> GetProducts()
        {
            return repo.GetProducts();
        }
        [HttpGet("api/products/{id}")]
        public Product GetProduct(int id)
        {
            return repo.GetProduct(id);
        }
        [HttpDelete("api/products/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            Product product = repo.DeleteProduct(id);
            return Ok(product);
        }
        [HttpGet("api/orders")]
        public IEnumerable<ShowedOrder> GetOrders()
        {
            return repo.GetOrders();
        }
        [HttpPost("api/orders")]
        public IActionResult Post(OrderCreation order)
        {
            if (ModelState.IsValid)
            {
                repo.CreateOrder(order);
                return Ok(order);
            }
            return BadRequest(ModelState);
        }
    }
}

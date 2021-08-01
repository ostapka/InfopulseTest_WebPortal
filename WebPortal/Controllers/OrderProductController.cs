using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await repo.GetProductsAsync();
        }
        [HttpGet("api/products/{id}")]
        public async Task<Product> GetProduct(int id)
        {
            return await repo.GetProductAsync(id);
        }
        [HttpDelete("api/products/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            Product product = await repo.DeleteProductAsync(id);
            return Ok(product);
        }
        [HttpGet("api/orders")]
        public async Task<IEnumerable<ShowedOrder>> GetOrders()
        {
            return await repo.GetOrdersAsync();
        }
        [HttpPost("api/orders")]
        public async Task<IActionResult> Post(OrderCreation order)
        {
            if (ModelState.IsValid)
            {
                await repo.CreateOrderAsync(order);
                return Ok(order);
            }
            return BadRequest(ModelState);
        }
    }
}

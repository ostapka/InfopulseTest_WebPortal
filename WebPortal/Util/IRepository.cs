using System.Collections.Generic;
using System.Threading.Tasks;
using WebPortal.Models;

namespace WebPortal.Util
{
    public interface IRepository
    {
        public Task<IEnumerable<Product>> GetProductsAsync();
        public Task<Product> GetProductAsync(int id);
        public Task<Product> DeleteProductAsync(int id);
        public Task<IEnumerable<ShowedOrder>> GetOrdersAsync();
        public Task CreateOrderAsync(OrderCreation order);
    }
}

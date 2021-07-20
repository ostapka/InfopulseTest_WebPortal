using System.Collections.Generic;
using WebPortal.Models;

namespace WebPortal.Util
{
    public interface IRepository
    {
        public IEnumerable<Product> GetProducts();
        public Product GetProduct(int id);
        public Product DeleteProduct(int id);
        public IEnumerable<ShowedOrder> GetOrders();
        public void CreateOrder(OrderCreation order);
    }
}

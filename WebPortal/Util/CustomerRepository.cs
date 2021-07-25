using System.Collections.Generic;
using System.Linq;
using WebPortal.Models;

namespace WebPortal.Util
{
    public class CustomerRepository : ICustomerRepository
    {
        ApplicationContext db;
        public CustomerRepository(ApplicationContext context)
        {
            db = context;
        }
        public IEnumerable<ShowedCustomer> Get()
        {
            return db.Customers.Select(c => new ShowedCustomer() {
                Id = c.Id,
                CustomerName = c.CustomerName, 
                CustomerAddress = c.CustomerAddress,
                TotalSum = c.Orders.SelectMany(o => o.ProductForOrder).
                                Select(p => p.Product.Price * p.Quantity).Sum(),
                Count = c.Orders.Count() }).ToList();
        }
        public void Post(Customer customer)
        {
            db.Customers.Add(customer);
            db.SaveChanges();
        }
    }
}

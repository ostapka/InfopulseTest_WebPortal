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
                CustomerName = c.CustomerName, 
                CustomerAddress = c.CustomerAddress,
                TotalSum = c.Orders.SelectMany(o => o.Products).
                                Select(p => p.Price * p.Quantity).Sum(),
                Count = c.Orders.Count() }).ToList();
        }
        public void Post(Customer customer)
        {
            db.Customers.Add(customer);
            db.SaveChanges();
        }
    }
}

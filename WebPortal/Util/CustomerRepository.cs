using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public async Task<IEnumerable<ShowedCustomer>> GetAsync() => await Task.Run(() => Get());
        public async Task PostAsync(Customer customer)
        {
            await db.Customers.AddAsync(customer);
            await db.SaveChangesAsync();
        }
    }
}

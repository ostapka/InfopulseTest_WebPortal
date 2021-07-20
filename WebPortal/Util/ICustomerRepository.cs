using System.Collections.Generic;
using WebPortal.Models;

namespace WebPortal.Util
{
    public interface ICustomerRepository
    {
        public IEnumerable<ShowedCustomer> Get();
        public void Post(Customer customer);
    }
}

using System.Collections.Generic;
using System.Threading.Tasks;
using WebPortal.Models;

namespace WebPortal.Util
{
    public interface ICustomerRepository
    {
        public Task<IEnumerable<ShowedCustomer>> GetAsync();
        public Task PostAsync(Customer customer);
    }
}

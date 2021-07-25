using System.Collections.Generic;

namespace WebPortal.Models
{
    public class CustomerBase
    {public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
    }
    public class Customer : CustomerBase
    {
        public List<Order> Orders { get; set; } = new List<Order>();
    }
    public class ShowedCustomer : CustomerBase
    {
        public decimal TotalSum { get; set; }
        public int Count { get; set; }
    }
}

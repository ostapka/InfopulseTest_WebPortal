using System.Collections.Generic;

namespace WebPortal.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public List<Order> Orders { get; set; } = new List<Order>();
    }
    public class ShowedCustomer
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public decimal TotalSum { get; set; }
        public int Count { get; set; }
    }
}

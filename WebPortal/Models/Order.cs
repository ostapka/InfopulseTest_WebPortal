using System.Collections.Generic;

namespace WebPortal.Models
{
    public class Order
    {
        public int Id { get; set; }
        public StatusEnum Status { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();
    }
    public class ShowedOrder
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public decimal TotalCost { get; set; }
        public StatusEnum Status { get; set; }
    }
    public class OrderCreation
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public StatusEnum Status { get; set; }
    }
}

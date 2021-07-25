using System.Collections.Generic;

namespace WebPortal.Models
{
    public class OrderBase
    {
        public int Id { get; set; }
        public StatusEnum Status { get; set; }
    }
    public class Order : OrderBase
    {
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();
        public List<ProductForOrder> ProductForOrder { get; set; } = new List<ProductForOrder>();
    }
    public class ShowedOrder : OrderBase
    {
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public decimal TotalCost { get; set; }
    }
    public class OrderCreation : OrderBase
    {
        public int CustomerId { get; set; }
        
    }
}

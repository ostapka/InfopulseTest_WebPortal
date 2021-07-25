using System.Collections.Generic;

namespace WebPortal.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Size { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public List<Order> Orders { get; set; } = new List<Order>();
        public List<ProductForOrder> ProductForOrder { get; set; } = new List<ProductForOrder>();
    }
}

using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebPortal.Models;

namespace WebPortal.Util
{
    public class OrderProductRepository : IRepository
    {
        ApplicationContext db;
        public OrderProductRepository(ApplicationContext context)
        {
            db = context;

            //Ініціалізація бази данних, мала би бути забрана при повній реалізації
            Product product1 = new Product { Name = "Pizza", Category = "Foods", Size = "Small", Quantity = 1, Price = 50.00M };
            Product product2 = new Product { Name = "Chocolate", Category = "Foods", Size = "Medium", Quantity = 2, Price = 50.00M };
            List<Product> products1 = new List<Product>();
            products1.Add(product1);
            products1.Add(product2);
            List<Product> products2 = new List<Product>();
            products2.Add(product1);
            Customer customer1 = new Customer { CustomerName = "John Smith", CustomerAddress = "5th Ave, New York" };
            Customer customer2 = new Customer { CustomerName = "Jane Smith", CustomerAddress = "10th Ave, New York" };
            Order order1 = new Order { Status = StatusEnum.New, Customer = customer1, Products = products1 };
            Order order2 = new Order { Status = StatusEnum.New, Customer = customer2, Products = products2 };
            List<Order> orders1 = new List<Order>();
            List<Order> orders2 = new List<Order>();
            List<Order> orders3 = new List<Order>();
            orders1.Add(order1);
            orders2.Add(order1);
            orders2.Add(order2);
            orders3.Add(order2);
            product1.Orders = orders2;
            product2.Orders = orders1;
            customer1.Orders = orders1;
            customer2.Orders = orders3;
            if (!db.Customers.Any())
            {
                db.Customers.Add(customer1);
                db.Customers.Add(customer2);
                db.SaveChanges();
            }
            if (!db.Products.Any())
            {
                db.Products.Add(product1);
                db.Products.Add(product2);
                db.SaveChanges();
            }
            if (!db.Orders.Any())
            {
                db.Orders.Add(order1);
                db.Orders.Add(order2);
            }
        }
        public async Task CreateOrderAsync(OrderCreation order)
        {
            Order orderCreate = new Order { Status = order.Status, CustomerId = order.CustomerId};
            order.Products.Select(p => { orderCreate.ProductForOrder.Add(new ProductForOrder() { Quantity = p.Quantity, OrderId = order.Id, ProductId = p.Id}); return db.Products.Update(p); }).ToList();
            await db.Orders.AddAsync(orderCreate);
            await db.SaveChangesAsync();
        }

        public async Task<Product> DeleteProductAsync(int id)
        {
            Product product = await db.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (product != null)
            {
                db.Products.Remove(product);
                await db.SaveChangesAsync();
            }
            return product;
        }

        public async Task<IEnumerable<ShowedOrder>> GetOrdersAsync()
        {
            return await db.Orders.Select(o => new ShowedOrder
            {
                Id = o.Id,
                CustomerName = o.Customer.CustomerName,
                CustomerAddress = o.Customer.CustomerAddress,
                TotalCost = o.ProductForOrder.Select(p => p.Product.Price * p.Quantity).Sum(),
                Status = o.Status
            }).ToListAsync();
        }

        public async Task<Product> GetProductAsync(int id)
        {
            Product product = await db.Products.FirstOrDefaultAsync(x => x.Id == id);
            return product;
        }

        public async Task<IEnumerable<Product>> GetProductsAsync() => await db.Products.ToListAsync();
    }
}

using Microsoft.EntityFrameworkCore;

namespace WebPortal.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            //Мало би бути забране при повній релізації, для можливості міграцій
            Database.EnsureCreated();
        }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}

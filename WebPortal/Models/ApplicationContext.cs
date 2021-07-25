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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Product>()
                .HasMany(c => c.Orders)
                .WithMany(s => s.Products)
                .UsingEntity<ProductForOrder>(
                   j => j
                    .HasOne(pt => pt.Order)
                    .WithMany(t => t.ProductForOrder)
                    .HasForeignKey(pt => pt.OrderId),
                j => j
                    .HasOne(pt => pt.Product)
                    .WithMany(p => p.ProductForOrder)
                    .HasForeignKey(pt => pt.ProductId),
                j =>
                {
                    j.Property(pt => pt.Quantity).HasDefaultValue(0);
                    j.HasKey(t => new { t.ProductId, t.OrderId });
                    j.ToTable("ProductForOrders");
                });
        }
    }
}

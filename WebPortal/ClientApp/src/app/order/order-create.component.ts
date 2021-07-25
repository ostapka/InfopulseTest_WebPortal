import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderCreation } from '../models/orderCreation';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ProductAddToOrderComponent } from './product-add-to-order.component';
import { StatusEnum } from '../models/statusEnum';

@Component({
    templateUrl: './order-create.component.html'
})
export class OrderCreateComponent {

    order: OrderCreation = new OrderCreation();    // добавляемый объект
    createdDate = this.transformDate();
    
    status = StatusEnum;
    enumKeys = [];
    customers: Customer[];
    products: Product[]/* = []*/;
    loaded: boolean = false;
    constructor(private dataOrderService: OrderService,
                private dataCustomerService: CustomerService,
                private dataProductService: ProductService,
                private router: Router) {
        this.enumKeys = Object.keys(this.status).filter(Number);
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataCustomerService.getCustomers().subscribe((data: Customer[]) => { console.log(data); return this.customers = data; });
    }
    
    save() {
        this.order.customerId = +this.order.customerId;
        this.order.status = +this.order.status;
        this.dataOrderService.createOrder(this.order).subscribe(data => this.router.navigateByUrl("/"));
    }
    transformDate() {
        let newDate = new Date();
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    }
    addToOrder(order: OrderCreateComponent) {
        //console.log(order.products);
        //let productAdd = new ProductAddToOrderComponent(this.dataOrderService, this.dataProductService, this.router, this);

        this.router.navigateByUrl("orders/create/addToOrder");
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderCreation } from '../models/orderCreation';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
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
    constructor(private dataOrderService: OrderService, private dataCustomerService: CustomerService, private router: Router) {
        this.enumKeys = Object.keys(this.status).filter(Number);
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataCustomerService.getCustomers().subscribe((data: Customer[]) => this.customers = data);
    }
    save() {
        this.dataOrderService.createOrder(this.order).subscribe(data => this.router.navigateByUrl("/"));
    }
    transformDate() {
        let newDate = new Date();
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    }
}
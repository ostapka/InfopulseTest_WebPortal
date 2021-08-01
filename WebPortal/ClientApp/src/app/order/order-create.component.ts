import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { OrderCreation } from '../models/orderCreation';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { StatusEnum } from '../models/statusEnum';
import { CommonService } from '../services/common.service';

@Component({
    templateUrl: './order-create.component.html'
})
export class OrderCreateComponent implements OnInit{

    order: OrderCreation = new OrderCreation();    // добавляемый объект
    createdDate = this.transformDate();
    product: Product;
    status = StatusEnum;
    enumKeys = [];
    customers: Customer[];
    loaded: boolean = false;
    subscription: Subscription;
    constructor(private dataCommonService: CommonService,
                private dataOrderService: OrderService,
                private dataCustomerService: CustomerService,
                private router: Router) {
        this.enumKeys = Object.keys(this.status).filter(Number);
    }
    ngOnInit() {
        this.load();
        if (this.dataCommonService.subject.isStopped)
            this.method();
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
    method() {
        this.order = this.dataCommonService.subject.value;
    }
    selectChange() {
        this.order.customerId = +this.order.customerId;
        this.order.status = +this.order.status;
    }
    addToOrder() {
        this.sendOrder();
        this.router.navigateByUrl("orders/create/addToOrder");
    }
    sendOrder(): void {
        // send order to subscribers via observable behavior subject
        this.dataCommonService.sendOrder(this.order);
    }
}
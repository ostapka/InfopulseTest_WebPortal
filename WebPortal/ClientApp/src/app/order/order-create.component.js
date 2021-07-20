var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { OrderCreation } from '../models/orderCreation';
import { StatusEnum } from '../models/statusEnum';
let OrderCreateComponent = class OrderCreateComponent {
    constructor(dataOrderService, dataCustomerService, router) {
        this.dataOrderService = dataOrderService;
        this.dataCustomerService = dataCustomerService;
        this.router = router;
        this.order = new OrderCreation(); // добавляемый объект
        this.createdDate = this.transformDate();
        this.status = StatusEnum;
        this.enumKeys = [];
        this.enumKeys = Object.keys(this.status).filter(Number);
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataCustomerService.getCustomers().subscribe((data) => this.customers = data);
    }
    save() {
        this.dataOrderService.createOrder(this.order).subscribe(data => this.router.navigateByUrl("/"));
    }
    transformDate() {
        let newDate = new Date();
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }
};
OrderCreateComponent = __decorate([
    Component({
        templateUrl: './order-create.component.html'
    })
], OrderCreateComponent);
export { OrderCreateComponent };
//# sourceMappingURL=order-create.component.js.map
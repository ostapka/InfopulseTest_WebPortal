var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Customer } from '../models/customer';
let CustomerCreateComponent = class CustomerCreateComponent {
    constructor(dataCustomerService, router) {
        this.dataCustomerService = dataCustomerService;
        this.router = router;
        this.customer = new Customer(); // добавляемый объект
        this.createdDate = this.transformDate();
    }
    save() {
        this.dataCustomerService.createCustomer(this.customer).subscribe(data => this.router.navigateByUrl("/customers"));
    }
    transformDate() {
        let newDate = new Date();
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }
};
CustomerCreateComponent = __decorate([
    Component({
        templateUrl: './customer-create.component.html'
    })
], CustomerCreateComponent);
export { CustomerCreateComponent };
//# sourceMappingURL=customer-create.component.js.map
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
    templateUrl: './customer-create.component.html'
})
export class CustomerCreateComponent {

    customer: Customer = new Customer();    // добавляемый объект
    createdDate = this.transformDate();
    constructor(private dataCustomerService: CustomerService, private router: Router) { }
    save() {
        this.dataCustomerService.createCustomer(this.customer).subscribe(data => this.router.navigateByUrl("/customers"));
    }
    transformDate() {
        let newDate = new Date();
        return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
    }
}
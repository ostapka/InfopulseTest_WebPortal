import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

    customers: Customer[];
    constructor(private dataCustomerService: CustomerService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataCustomerService.getCustomers().subscribe((data: Customer[]) => this.customers = data);
    }
}
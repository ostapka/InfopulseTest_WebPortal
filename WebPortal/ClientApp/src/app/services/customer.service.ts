import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {

    private url = "/api/customers";

    constructor(private http: HttpClient) {
    }

    getCustomers() {
        return this.http.get(this.url);
    }

    createCustomer(customer: Customer) {
        return this.http.post(this.url, customer);
    }
}
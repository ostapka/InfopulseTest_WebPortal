﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderCreation } from '../models/orderCreation';

@Injectable()
export class OrderService {

    private url = "/api/orders";

    constructor(private http: HttpClient) {
    }

    getOrders() {
        return this.http.get(this.url);
    }
    createOrder(order: OrderCreation) {
        return this.http.post(this.url, order);
    }
}
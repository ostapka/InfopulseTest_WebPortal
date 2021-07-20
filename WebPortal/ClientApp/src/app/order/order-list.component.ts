import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { StatusEnum } from '../models/statusEnum';

@Component({
    templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {

    orders: Order[];
    status = StatusEnum;
    constructor(private dataOrderService: OrderService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataOrderService.getOrders().subscribe((data: Order[]) => this.orders = data);
    }
}
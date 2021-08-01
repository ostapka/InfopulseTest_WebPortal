import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonService } from '../services/common.service';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { OrderCreation } from '../models/orderCreation';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './product-add-to-order.component.html'
})
export class ProductAddToOrderComponent implements OnInit/*, OnDestroy*/ {
    id: number;
    product: Product = new Product();
    order: OrderCreation = new OrderCreation();
    loaded: boolean = false;
    products: Product[];
    subscription: Subscription;
    constructor(private dataCommonService: CommonService,
                private dataOrderService: OrderService,
                private dataProductService: ProductService,
                private router: Router) {
        
    }
    ngOnInit() {
        this.load();
        this.order = this.dataCommonService.subject.getValue();
    }
    //ngOnDestroy() {
    //    this.dataOtherCommonService.subject.unsubscribe();
    //}
    load() {
        this.dataProductService.getProducts().subscribe((data: Product[]) => this.products = data);
        if (this.id)
            this.dataOrderService.getOrder(this.id)
                .subscribe((data: OrderCreation) => { this.order = data; this.loaded = true; });
    }
    selectChange() {
        this.id = +this.id;
        this.product = this.products.find(el => el.id == this.id);
        if (!this.order.products)
            this.order.products = [];
        this.order.products.push(this.product);
    }
    save() {
        this.sendOrder();
        this.router.navigateByUrl("/orders/create");
    }
    sendOrder(): void {
        // send order to subscribers via observable behavior subject
        this.dataCommonService.sendOrder(this.order);
        
    }
}
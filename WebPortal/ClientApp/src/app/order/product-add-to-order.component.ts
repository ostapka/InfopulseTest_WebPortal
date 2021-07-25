import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { OrderCreateComponent } from './order-create.component';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
    templateUrl: './product-add-to-order.component.html'
})
export class ProductAddToOrderComponent implements OnInit {
    id: number;
    product: Product = new Product();
    order: Order;
    //orderCreator: OrderCreateComponent ;
    loaded: boolean = false;
    products: Product[];
    constructor(private dataOrderService: OrderService, private dataProductService: ProductService, private router: Router/*, private orderCreator: OrderCreateComponent*/) {
        
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataProductService.getProducts().subscribe((data: Product[]) => this.products = data);
        if (this.id)
            this.dataOrderService.getOrder(this.id)
                .subscribe((data: Order) => { this.order = data; this.loaded = true; });
    }
    selectChange() {
        this.id = +this.id;
        this.product = this.products.find(el => el.id == this.id);
    }
    save() {
        //console.log(this.orderCreator);
        //if (this.orderCreator.products == undefined) {
        //    this.orderCreator.products = [];
        //}
        //this.orderCreator.products.push(this.product);
        this.router.navigateByUrl("/orders/create");
    }
}
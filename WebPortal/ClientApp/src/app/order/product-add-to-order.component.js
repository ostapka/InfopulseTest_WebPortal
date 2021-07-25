var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Product } from '../models/product';
let ProductAddToOrderComponent = class ProductAddToOrderComponent {
    constructor(dataOrderService, dataProductService, router /*, private orderCreator: OrderCreateComponent*/) {
        this.dataOrderService = dataOrderService;
        this.dataProductService = dataProductService;
        this.router = router;
        this.product = new Product();
        //orderCreator: OrderCreateComponent ;
        this.loaded = false;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataProductService.getProducts().subscribe((data) => this.products = data);
        if (this.id)
            this.dataOrderService.getOrder(this.id)
                .subscribe((data) => { this.order = data; this.loaded = true; });
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
};
ProductAddToOrderComponent = __decorate([
    Component({
        templateUrl: './product-add-to-order.component.html'
    })
], ProductAddToOrderComponent);
export { ProductAddToOrderComponent };
//# sourceMappingURL=product-add-to-order.component.js.map
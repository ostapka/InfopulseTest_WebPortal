var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Product } from '../models/product';
import { OrderCreation } from '../models/orderCreation';
let ProductAddToOrderComponent = class ProductAddToOrderComponent {
    constructor(dataCommonService, dataOrderService, dataProductService, router) {
        this.dataCommonService = dataCommonService;
        this.dataOrderService = dataOrderService;
        this.dataProductService = dataProductService;
        this.router = router;
        this.product = new Product();
        this.order = new OrderCreation();
        this.loaded = false;
    }
    ngOnInit() {
        this.load();
        this.order = this.dataCommonService.subject.getValue();
    }
    //ngOnDestroy() {
    //    this.dataOtherCommonService.subject.unsubscribe();
    //}
    load() {
        this.dataProductService.getProducts().subscribe((data) => this.products = data);
        if (this.id)
            this.dataOrderService.getOrder(this.id)
                .subscribe((data) => { this.order = data; this.loaded = true; });
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
    sendOrder() {
        // send order to subscribers via observable behavior subject
        this.dataCommonService.sendOrder(this.order);
    }
};
ProductAddToOrderComponent = __decorate([
    Component({
        templateUrl: './product-add-to-order.component.html'
    })
], ProductAddToOrderComponent);
export { ProductAddToOrderComponent };
//# sourceMappingURL=product-add-to-order.component.js.map
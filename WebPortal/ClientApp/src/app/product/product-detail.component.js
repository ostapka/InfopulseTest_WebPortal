var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
let ProductDetailComponent = class ProductDetailComponent {
    constructor(dataProductService, activeRoute) {
        this.dataProductService = dataProductService;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    ngOnInit() {
        if (this.id)
            this.dataProductService.getProduct(this.id)
                .subscribe((data) => { this.product = data; this.loaded = true; });
    }
};
ProductDetailComponent = __decorate([
    Component({
        templateUrl: './product-detail.component.html',
        providers: [ProductService]
    })
], ProductDetailComponent);
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map
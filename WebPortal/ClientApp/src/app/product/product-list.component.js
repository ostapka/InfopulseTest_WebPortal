var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let ProductListComponent = class ProductListComponent {
    constructor(dataProductService) {
        this.dataProductService = dataProductService;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataProductService.getProducts().subscribe((data) => this.products = data);
    }
    delete(id) {
        this.dataProductService.deleteProduct(id).subscribe(data => this.load());
    }
};
ProductListComponent = __decorate([
    Component({
        templateUrl: './product-list.component.html'
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map
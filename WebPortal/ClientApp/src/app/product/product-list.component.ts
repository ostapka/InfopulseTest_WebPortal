import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];
    constructor(private dataProductService: ProductService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataProductService.getProducts().subscribe((data: Product[]) => this.products = data);
    }
    delete(id: number) {
        this.dataProductService.deleteProduct(id).subscribe(data => this.load());
    }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    templateUrl: './product-detail.component.html',
    providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

    id: number;
    product: Product;
    loaded: boolean = false;

    constructor(private dataProductService: ProductService, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataProductService.getProduct(this.id)
                .subscribe((data: Product) => { this.product = data; this.loaded = true; });
    }
}
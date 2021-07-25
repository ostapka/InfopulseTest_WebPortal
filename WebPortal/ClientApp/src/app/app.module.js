var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order/order-list.component';
import { OrderCreateComponent } from './order/order-create.component';
import { ProductAddToOrderComponent } from './order/product-add-to-order.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
// определение маршрутов
const appRoutes = [
    { path: '', component: OrderListComponent },
    { path: 'orders/create/addToOrder', component: ProductAddToOrderComponent },
    { path: 'orders/create', component: OrderCreateComponent },
    { path: 'orders/edit/addToOrder/:id', component: ProductAddToOrderComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/product/:id', component: ProductDetailComponent },
    { path: 'product/delete', component: ProductListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customers/create', component: CustomerCreateComponent },
    { path: '**', component: NotFoundComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
        declarations: [AppComponent, OrderListComponent, OrderCreateComponent, ProductAddToOrderComponent,
            ProductListComponent, ProductDetailComponent, CustomerListComponent,
            CustomerCreateComponent, NotFoundComponent],
        providers: [CustomerService, ProductService, OrderService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
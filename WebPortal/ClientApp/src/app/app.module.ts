﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order/order-list.component';
import { OrderCreateComponent } from './order/order-create.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';


// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: OrderListComponent },
    { path: 'orders/create', component: OrderCreateComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/product/:id', component: ProductDetailComponent },
    { path: 'product/delete', component: ProductListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customers/create', component: CustomerCreateComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, OrderListComponent, OrderCreateComponent,
        ProductListComponent, ProductDetailComponent, CustomerListComponent,
        CustomerCreateComponent, NotFoundComponent],
    providers: [CustomerService, ProductService, OrderService], // регистрация сервисов
    bootstrap: [AppComponent]
})
export class AppModule { }
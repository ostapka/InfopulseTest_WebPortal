var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { OrderCreation } from '../models/orderCreation';
import { BehaviorSubject } from 'rxjs';
let CommonService = class CommonService {
    constructor() {
        this.subject = new BehaviorSubject(OrderCreation);
    }
    sendOrder(order) {
        this.subject.next(order);
        this.subject.complete();
    }
    onOrder() {
        return this.subject.asObservable();
    }
};
CommonService = __decorate([
    Injectable()
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map
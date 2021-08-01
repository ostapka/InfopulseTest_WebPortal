import { Injectable } from '@angular/core';
import { OrderCreation } from '../models/orderCreation';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {
    subject: BehaviorSubject<any> = new BehaviorSubject(OrderCreation);

    sendOrder(order: OrderCreation) {
        this.subject.next(order);
        this.subject.complete();
    }
    onOrder(): Observable<any> {
        return this.subject.asObservable();
    }
}
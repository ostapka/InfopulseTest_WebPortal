import { StatusEnum } from './statusEnum';
import { Product } from '../models/product';
export class OrderCreation {
    constructor(
        public id?: number,
        public customerId?: number,
        public loaded: boolean = false,
        public status?: StatusEnum,
        public products?: Product[]) { }
}
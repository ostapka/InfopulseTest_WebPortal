import { StatusEnum } from './statusEnum';
export class OrderCreation {
    constructor(
        public id?: number,
        public customerId?: number,
        public status?: StatusEnum) { }
}
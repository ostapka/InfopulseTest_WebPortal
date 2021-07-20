import { StatusEnum } from './statusEnum';
export class Order {
    constructor(
        public id?: number,
        public customerName?: string,
        public customerAddress?: string,
        public totalCost?: number,
        public status?: StatusEnum) { }
}
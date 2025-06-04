import { Order } from "./Order";

export interface Customer {
    id: string;
    name: string;
    phone: string;
    address: string;
    createdAt: Date;
    orders: Order[];
}
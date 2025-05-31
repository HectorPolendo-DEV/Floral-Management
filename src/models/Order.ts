export type OrderStatus = 'Entregado' | 'Pendiente' | 'En camino' | 'Cancelado';

export interface Order {
    id: string;
    customer: string;
    status: OrderStatus;
    type: string;
    date: Date;
}
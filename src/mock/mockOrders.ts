import { Order } from '../models/Order';

export const mockOrders: Order[] = [
  { id: '1', customer: 'Ana Martínez', status: 'Entregado', type: 'Ramo', date: new Date() },
  { id: '2', customer: 'Luis Pérez', status: 'Pendiente', type: 'Bouquet', date: new Date() },
  { id: '3', customer: 'María López', status: 'En camino', type: 'Ramo', date: new Date() },
  { id: '4', customer: 'Juan Rodríguez', status: 'En camino', type: 'Bouquet', date: new Date() },
  { id: '5', customer: 'Pedro González', status: 'Cancelado', type: 'Ramo', date: new Date() },
];
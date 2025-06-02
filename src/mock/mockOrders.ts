import { Order } from '../models/Order';

export const mockOrders: Order[] = [
  { id: '1', customer: 'Ana Martínez', status: 'Entregado', type: 'Ramo', date: new Date(), image: require('../../assets/images/opcion 1.png') },
  { id: '2', customer: 'Luis Pérez', status: 'Pendiente', type: 'Bouquet', date: new Date(), image: require('../../assets/images/opcion 2.png') },
  { id: '3', customer: 'María López', status: 'En camino', type: 'Ramo', date: new Date(), image: require('../../assets/images/opcion 3.png') },
  { id: '4', customer: 'Juan Rodríguez', status: 'En camino', type: 'Bouquet', date: new Date(), image: require('../../assets/images/opcion 4.png') },
  { id: '5', customer: 'Pedro González', status: 'Cancelado', type: 'Ramo', date: new Date(), image: require('../../assets/images/opcion 1.png') },
];
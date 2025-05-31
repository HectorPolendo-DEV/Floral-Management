import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Order } from '../../models/Order';
import colors from '@/theme/colors';
import { OrderStatus } from '../../models/Order';

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 2;

// Define the color mappings
const statusColor: Record<OrderStatus, string> = {
  'Entregado': `${colors.success}`,
  'Pendiente': `${colors.warning}`,
  'En camino': '#2196F3',
  'Cancelado': `${colors.error}`
};

const textColorByStatus: Record<OrderStatus, string> = {
  'Entregado': `${colors.successText}`,
  'Pendiente': `${colors.warningText}`,
  'En camino': 'white',
  'Cancelado': `${colors.errorText}`
};

const image = require('assets/flowers-2.jpg');
interface Props {
  order: Order;
}

const OrderItem = ({ order }: Props) => {
  return (
    <View 
      className='rounded-2xl mb-3 flex-row bg-white mx-2 '>
      
      <Image source={image}
        className={'rounded-2xl'}
        style={{ width: itemSize-50, height: itemSize-50 }}/>
      
      <View className='mt-2 ml-2'>
        <View className='flex-1'>
          <View className='flex-row'>
            <Text className='text-2xl font-bold'>Pedido</Text>
            <Text className='text-2xl font-bold ml-2'>{'#'+order.id}</Text>
          </View>
          <Text className='text-2xl'>{order.customer}</Text>
          <View className='flex-row'>
            <Text className='text-2xl'>Tipo:</Text>
            <Text className='text-2xl ml-2'>{order.type}</Text>
          </View>
          <View style={{ backgroundColor: statusColor[order.status], alignSelf: 'flex-start', minWidth: 90 }} className={`px-2 rounded-md`}>
            <Text className={'text-lg font-bold'} style={{flexWrap: 'wrap', color: textColorByStatus[order.status]}}>{order.status}</Text>
          </View>
        </View>  
      </View>
    </View>
  );
};

export default OrderItem;
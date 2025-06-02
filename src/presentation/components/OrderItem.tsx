import React from 'react';
import { View, Text, Image, Dimensions, ImageSourcePropType } from 'react-native';
import { Order } from '../../models/Order';
import colors from '@/theme/colors';
import { OrderStatus } from '../../models/Order';
import Ionicons from '@expo/vector-icons/Ionicons';
import Tag from './Tag';

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 3;

const statusColor: Record<OrderStatus, string> = {
  'Entregado': `${colors.success}`,
  'Pendiente': `${colors.warning}`,
  'En camino': '#2196F3',
  'Cancelado': `${colors.error}`
};

interface Props {
  order: Order;
}

const OrderItem = ({ order }: Props) => {
  return (
    <View 
      className='rounded-2xl mb-3 flex-row bg-white mx-2 items-center'>
      
      <Image source={order.image as ImageSourcePropType}
        className={'rounded-2xl'}
        style={{ width: itemSize-20, height: itemSize }}
        resizeMode="cover"
      />
      
      <View className='my-2 mx-4 flex-1'>
          <Tag text={order.status} color={statusColor[order.status]}/>
          <Text style={{fontFamily: 'Roboto-SemiBold'}} className='text-2xl' numberOfLines={1}>{order.customer}</Text>
          <Text style={{fontFamily: 'Roboto-SemiBold', color: colors.primary}} className='text-xl'>{'#'+order.id}</Text>
          <Text className='text-2xl me-2'numberOfLines={2}>Tipo: {order.type}</Text>
      </View>
      <Ionicons name="chevron-forward-sharp" size={25} color={colors.primary} className='mr-1 self-center'/>
    </View>
  );
};

export default OrderItem;
import React from 'react';
import { View, Text, Image, Dimensions, ImageSourcePropType, Platform, StyleSheet  } from 'react-native';
import { Order } from '../../../models/Order';
import { theme } from '@/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import Tag from '../Tag';

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 3;

const statusColor: Record<string, string> = {
  'Entregado': `${theme.colors.success}`,
  'Pendiente': `${theme.colors.warning}`,
  'En camino': '#2196F3',
  'Cancelado': `${theme.colors.error}`
};

interface Props {
  order: Order;
}

const OrderItem = ({ order }: Props) => {
  
    if (Platform.OS == 'web') {
      return (
        <View className='rounded-2xl mb-3 flex-row bg-white mx-2 items-center'>
                    
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Pedido {order.id}</h3>
                <p className="text-lg text-gray-700 mb-2">{order.customer}</p>
                <p className="text-gray-600">Entrega: {order.date.toDateString()}</p>
              </div>  
              <Tag text={order.status} color={statusColor[order.status]}/>
            </div>
          </div>
        </View>
      )
    } else {
      return (
        <View className='rounded-2xl mb-3 flex-row bg-white mx-2 items-center'>
      
          <Image source={order.image as ImageSourcePropType}
            className={'rounded-2xl'}
            style={{ width: itemSize-20, height: itemSize }}
            resizeMode="cover"
          />
      
          <View className='my-2 mx-4 flex-1 justify-between gap-y-2'>
              <Tag text={order.status} color={statusColor[order.status]}/>
              <Text style= {styles.name} numberOfLines={1}>{order.customer}</Text>
              <Text style={styles.orderId}>{'#'+order.id}</Text>
              <Text style={styles.type} numberOfLines={2}>Tipo: {order.type}</Text>
          </View>

          <Ionicons name="chevron-forward-sharp" size={25} color={theme.colors.primary} className='mr-1 self-center'/>
        </View>
      );
    }
};

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Roboto-SemiBold',
    color: theme.colors.textPrimary, 
    fontSize: theme.fontSizes.md
  },
  orderId: {
    fontFamily: 'Roboto-SemiBold', 
    color: theme.colors.primary,
    fontSize: theme.fontSizes.md
  },
  type: {
    fontFamily: 'Roboto-Regular',
    color: theme.colors.textPrimary, 
    fontSize: theme.fontSizes.md
  }
})

export default OrderItem;
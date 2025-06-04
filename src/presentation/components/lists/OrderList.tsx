import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import OrderItem from '../items/OrderItem';
import { Order } from '../../../models/Order';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '@/theme/colors';

interface OrderListProps {
  orders: Order[];
  className?: string;
}

const OrderList = ({ orders }: OrderListProps) => {
  return (
    <View className={`flex-1 relative bg-[${colors.secondary}]`}>
      <LinearGradient
        colors={[colors.secondary, colors.secondaryTransparent]}
        style={[styles.fade, styles.topFade]}
        pointerEvents="none"
      />
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
        contentContainerClassName='mx-4'
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
      <LinearGradient
        colors={[colors.secondaryTransparent, colors.secondary]}
        style={[styles.fade, styles.bottomFade]}
        pointerEvents="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor:  colors.secondary,
  },
  fade: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 30,
    zIndex: 1,
  },
  topFade: {
    top: 0,
  },
  bottomFade: {
    bottom: 0,
  },
});

export default OrderList;
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import OrderList from '../components/OrderList';
import { mockOrders } from '../../mock/mockOrders';
import colors from '../../theme/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1`} style={{ backgroundColor: colors.primary }}>
      <Text className='text-4xl font-semibold text-white mt-6 ml-10'>Florería Martínez</Text>
      <View className={`rounded-3xl mt-6 flex-1`} style={{ backgroundColor: colors.secondary }}>
        <Text className='text-4xl font-semibold text-black mt-6 ml-10'>Pedidos</Text>
        <OrderList
          orders={mockOrders} 
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

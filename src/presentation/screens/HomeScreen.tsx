import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderList from '../components/OrderList';
import { mockOrders } from '../../mock/mockOrders';
import colors from '../../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Tag from '../components/Tag';

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1`} style={{ backgroundColor: colors.primary }} edges={['top']}>
      <View className='flex-row items-center mt-6 justify-between'>
        <Text className='text-4xl font-semibold text-white text-center ml-10'>Florería</Text>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="settings-sharp" size={25} color="white" className='mr-10'/>
        </TouchableOpacity>
      </View>
      <View className={`rounded-t-3xl mt-6 flex-1`} style={{ backgroundColor: colors.secondary }}>
        <OrderList
          orders={mockOrders} 
        />
      </View>
    </SafeAreaView>
  );
};

const handlePress = () => {
  console.log('Icon pressed!');
};

export default HomeScreen;

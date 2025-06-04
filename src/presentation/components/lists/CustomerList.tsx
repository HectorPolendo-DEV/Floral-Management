import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CustomerItem from '../items/CustomerItem';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '@/theme/colors';
import { Customer } from '@/models/Customer';

interface CustomerListProps {
  customers: Customer[];
  className?: string;
}

const CustomerList = ({ customers }: CustomerListProps) => {
  return (
    <View className={`flex-1 relative bg-[${colors.secondary}]`}>
      <LinearGradient
        colors={[colors.secondary, colors.secondaryTransparent]}
        style={[styles.fade, styles.topFade]}
        pointerEvents="none"
      />
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CustomerItem customer={item} />}
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

export default CustomerList;
import { View } from 'react-native'
import CustomerList from '../components/lists/CustomerList';
import { mockCustomers } from '../../mock/mockCustomers';
import colors from '../../theme/colors';
import React from 'react'

export default function CustomerScreen() {
  return (
    <View className={`rounded-t-3xl mt-6 flex-1`} style={{ backgroundColor: colors.secondary }}>
        <CustomerList customers={mockCustomers} />
    </View>
  )
}
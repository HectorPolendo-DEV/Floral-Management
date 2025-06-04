import React from 'react';
import { View, Text, Platform  } from 'react-native';
import { Customer } from '../../../models/Customer';
import colors from '@/theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  customer: Customer;
}

const CustomerItem = ({ customer }: Props) => {
  
    if (Platform.OS == 'web') {
      return (
        <View className='rounded-2xl mb-3 flex-row bg-white mx-2 items-center'>
                    
          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg text-gray-700 mb-2">{customer.name}</p>
                <p className="text-gray-600">Entrega: {customer.address}</p>
              </div>  
            </div>
          </div>
        </View>
      )
    } else {
      return (
        <View className='rounded-2xl mb-3 flex-row bg-white mx-2 items-center'>  
          <View className='my-2 mx-4 flex-1'>
              <Text style={{fontFamily: 'Roboto-SemiBold'}} className='text-2xl' numberOfLines={1}>{customer.name}</Text>
              <Text style={{fontFamily: 'Roboto-SemiBold', color: colors.primary}} className='text-xl'>{'#'+customer.address}</Text>
              <Text className='text-2xl me-2'numberOfLines={2}>Tipo: {customer.phone}</Text>
          </View>

          <Ionicons name="chevron-forward-sharp" size={25} color={colors.primary} className='mr-1 self-center'/>
        </View>
      );
    }
};

export default CustomerItem;
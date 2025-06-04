import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../theme/colors';
import { MenuState } from './Menu';

const handlePress = () => {
    console.log('Icon pressed!');
};

interface Props {
    screenTitle: MenuState
}

const getScreenTitle = (screen: MenuState) => {
    switch (screen) {
        case MenuState.ORDERS:
            return 'Pedidos';
        case MenuState.CUSTOMERS:
            return 'Clientes';
        case MenuState.NEW_ORDERS:
            return 'Nuevo Pedido';
        default:
            return 'Pedidos';
    }
}

export default function TopBar({ screenTitle }: Props) {
  return (
    <View className='flex-row items-center mt-6 justify-between' style={{ backgroundColor: colors.primary }}>
        <Text className='text-4xl font-semibold text-white text-center ml-10'>{getScreenTitle(screenTitle)}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="settings-sharp" size={25} color="white" className='mr-10'/>
        </TouchableOpacity>
    </View>
  )
}
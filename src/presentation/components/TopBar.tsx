import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../../theme/theme';
import { MenuState } from './Menu';

interface Props {
    screenTitle: MenuState;
    onIconPress: () => void;
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

export default function TopBar({ screenTitle, onIconPress }: Props) {
  return (
    <View className='flex-row items-center mt-6 justify-between' style={{ backgroundColor: theme.colors.primary }}>
        <Text
            className='text-white text-center ml-10' 
            style={{ 
                fontSize: theme.fontSizes.title, 
                fontFamily: 'Roboto-Regular' 
            }}>
            {getScreenTitle(screenTitle)}
        </Text>
        <TouchableOpacity onPress={onIconPress}>
          <Ionicons name="settings-sharp" size={25} color="white" className='mr-10'/>
        </TouchableOpacity>
    </View>
  )
}
import React, { useState } from 'react';
import { View } from 'react-native';
import OrderList from '../components/lists/OrderList';
import { mockOrders } from '../../mock/mockOrders';
import colors from '../../theme/colors';
import SearchBar from '../components/SearchBar';
import SlideUp from '../components/SlideUp';
import { Text } from 'react-native';

const OrderScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  return (
      <View className={`rounded-t-3xl mt-6 flex-1`} style={{ backgroundColor: colors.secondary }}>
        <SearchBar value={searchText} onChangeText={setSearchText} placeholder="Buscar pedido..." onOpenFilters={() => setFiltersVisible(true)} />

        <OrderList
          orders={mockOrders} 
        />

        <SlideUp visible={filtersVisible} onClose={() => setFiltersVisible(false)}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Opciones de filtro</Text>
        </SlideUp>
      </View>
  );
};

export default OrderScreen;

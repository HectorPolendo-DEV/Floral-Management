import { View, Text } from 'react-native'
import CustomerList from '../components/lists/CustomerList';
import { mockCustomers } from '../../mock/mockCustomers';
import colors from '../../theme/colors';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SlideUp from '../components/SlideUp';

export default function CustomerScreen() {
  const [searchText, setSearchText] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  return (
    <View className={`rounded-t-3xl mt-6 flex-1`} style={{ backgroundColor: colors.secondary }}>
      <SearchBar value={searchText} onChangeText={setSearchText} placeholder="Buscar cliente..." onOpenFilters={() => setFiltersVisible(true)} />
      <CustomerList customers={mockCustomers} />
      <SlideUp visible={filtersVisible} onClose={() => setFiltersVisible(false)}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Opciones de filtro</Text>
      </SlideUp>
    </View>
  )
}
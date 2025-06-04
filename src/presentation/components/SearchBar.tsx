import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../theme/colors';


interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onOpenFilters: () => void;
}

const SearchBar: React.FC<Props> = ({ value, onChangeText, placeholder = 'Buscar...', onOpenFilters }) => {
  const [opacity, setOpacity] = React.useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.primaryDark} className='mr-2' />
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
            autoCorrect={false}
            autoCapitalize="none"
            selectionColor={colors.primaryDark}
            cursorColor={colors.primaryDark}/>
            
            {value.length > 0 && (
                <Pressable onPress={() => onChangeText('')}>
                    <Ionicons name="close-circle" size={25} color= {colors.primaryDark} className='ml-2' />
                </Pressable>
            )}

      </View>
      
      <Pressable
        onPress={onOpenFilters}
        onPressIn={() => setOpacity(0.5)}
        onPressOut={() => setOpacity(1)}
        style={[styles.filterButton, { opacity }]}>
        <Ionicons name="filter" size={25} color={colors.primaryDark} />
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.searchBarColor,
    paddingVertical: 8,
    paddingHorizontal: 10,
    
    borderRadius: 30,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: '#333',
    fontFamily: 'Roboto-Regular',
  },
  filterButton: {
    backgroundColor: colors.white,
    borderRadius: 9999,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  }
});

export default SearchBar;

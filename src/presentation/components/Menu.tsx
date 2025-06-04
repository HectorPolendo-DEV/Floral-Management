import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import colors from '../../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export enum MenuState {
    CUSTOMERS = 'customers',
    ORDERS = 'orders',
    NEW_ORDERS = 'newOrders'
}

interface MenuButtonProps {
    icon: keyof typeof Ionicons.glyphMap;
    isActive: boolean;
    onPress: () => void;
    color?: string;
}

interface Props {
  activeState: MenuState;
  onChange: (state: MenuState) => void;
}  

const menuItems = [
    { icon: 'person-sharp', state: MenuState.CUSTOMERS },
    { icon: 'cube-outline', state: MenuState.ORDERS },
    { icon: 'add-sharp', state: MenuState.NEW_ORDERS }
];  

const MenuButton: React.FC<MenuButtonProps> = ({ icon, isActive, onPress, color = colors.primaryDark }) => {
  const scale = useSharedValue(isActive ? 1.1 : 1);
  const background = useSharedValue(isActive ? colors.primary : colors.secondaryTransparent);

  React.useEffect(() => {
    scale.value = withTiming(isActive ? 1.1 : 1, { duration: 100 });
    background.value = isActive ? colors.primary : colors.secondaryTransparent;
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: background.value,
    opacity: withTiming(isActive ? 1 : 0.99, { duration: 100 }),
  }));

  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Animated.View style={[styles.buttonStyle, animatedStyle]}>
        <Ionicons
          name={icon}
          size={35}
          style={{ color: isActive ? 'white' : color, alignSelf: 'center' }}
        />
      </Animated.View>
    </Pressable>
  );
};

const Menu: React.FC<Props> = ({ activeState, onChange }) => {
    return (
        <SafeAreaView style={{backgroundColor: colors.secondary}} edges={['bottom']}>
            <View style={styles.menuContainer}>
                {menuItems.map(item => (
                    <MenuButton
                    key={item.state}
                    icon={item.icon as keyof typeof Ionicons.glyphMap}
                    isActive={activeState === item.state}
                    onPress={() => onChange(item.state)}
                />
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 2,
        borderRadius: 9999
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: 9999,
        height: 60,
        justifyContent: 'center',
    }
})

export default Menu;;
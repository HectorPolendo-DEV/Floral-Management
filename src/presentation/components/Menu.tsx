import React from 'react';
import { View, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

enum MenuState {
    CLIENTES = 'clientes',
    PEDIDOS = 'Pedidos',
    ADD = 'add'
}

interface MenuButtonProps {
    icon: keyof typeof Ionicons.glyphMap;
    isActive: boolean;
    onPress: () => void;
    color?: string;
}

const menuItems = [
    { icon: 'person-sharp', state: MenuState.CLIENTES },
    { icon: 'cube-outline', state: MenuState.PEDIDOS },
    { icon: 'add-sharp', state: MenuState.ADD }
];

const MenuButton: React.FC<MenuButtonProps> = ({ icon, isActive, onPress, color = colors.primaryDark }) => (
    <Pressable
        style={getButtonStyle(isActive)}
        onPress={onPress}
    >
        <Ionicons 
            name={icon} 
            size={35} 
            style={[
                { color: isActive ? 'white' : color, alignSelf: 'center' }
            ]}
        />
    </Pressable>
);

const getButtonStyle = (isActive: boolean) => [
    styles.buttonStyle,
    { opacity: isActive ? 1 : 0.5, backgroundColor: isActive ? colors.primary : colors.white }
];

const Menu = () => {
    const [activeState, setActiveState] = React.useState<MenuState>(MenuState.PEDIDOS);

    const handlePress = (state: MenuState) => {
        setActiveState(state);
    };

    return (
        <SafeAreaView style={{backgroundColor: colors.secondary}} edges={['bottom']}>
            <View style={styles.menuContainer}>
                {menuItems.map(item => (
                    <MenuButton
                    key={item.state}
                    icon={item.icon as keyof typeof Ionicons.glyphMap}
                    isActive={activeState === item.state}
                    onPress={() => handlePress(item.state)}
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
        paddingVertical: 4,
        marginHorizontal: 4,
        marginTop: 4,
        marginBottom: 2,
        borderRadius: 9999
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: 9999,
        height: 60,
        justifyContent: 'center'
    },
    pressableDefault: {
        opacity: 0.5,
        backgroundColor: 'white'
    }
})

export default Menu;
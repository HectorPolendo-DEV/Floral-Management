import { View, Text, SafeAreaView } from "react-native";
import colors from '../../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Menu = () => {
    return (
        <SafeAreaView style={{backgroundColor: colors.secondary}}>
        <View className="flex-row justify-around items-center bg-white py-4 mx-4 mt-4 rounded-full">
            <Ionicons name="home-sharp" size={35} color={colors.primary}/>
            <Ionicons name="person-sharp" size={35} color={colors.primary}/>
            <Ionicons name="settings-sharp" size={35} color={colors.primary}/>
        </View>
        </SafeAreaView>
      );
}

export default Menu;
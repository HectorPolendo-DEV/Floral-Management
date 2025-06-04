import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Menu, { MenuState } from './src/presentation/components/Menu';
import TopBar from './src/presentation/components/TopBar';
import { applyDefaultFont } from './src/theme/setupFonts';
import { useFonts } from 'expo-font';
import { fontMap } from './src/theme/fonts';
import "./global.css"
import HomeScreen from './src/presentation/screens/OrderScreen';
import CustomerScreen from './src/presentation/screens/CustomerScreen';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import NewOrderScreen from './src/presentation/screens/NewOrderScreen';
import colors from './src/theme/colors';
import OrderScreen from './src/presentation/screens/OrderScreen';

const ScreenWrapper = ({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  const opacity = useSharedValue(isVisible ? 1 : 0);

  React.useEffect(() => {
    opacity.value = withTiming(isVisible ? 1 : 0, { duration: 200 });
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    display: opacity.value === 0 ? 'none' : 'flex',
  }));

  return <Animated.View style={[styles.screen, animatedStyle]}>{children}</Animated.View>;
};

export default function App() {
  const [fontsLoaded] = useFonts(fontMap);
  const [activeScreen, setActiveScreen] = useState<MenuState>(MenuState.ORDERS);

  if (!fontsLoaded) {
    return null;
  }

  applyDefaultFont('Roboto-Regular');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }} edges={['top']}>
        <TopBar screenTitle={activeScreen}/>
        <View style={styles.container}>
          <View style={styles.screenContainer}>
            <ScreenWrapper isVisible={activeScreen === MenuState.ORDERS}>
              <OrderScreen />
            </ScreenWrapper>
            <ScreenWrapper isVisible={activeScreen === MenuState.CUSTOMERS}>
              <CustomerScreen />
            </ScreenWrapper>
            <ScreenWrapper isVisible={activeScreen === MenuState.NEW_ORDERS}>
              <NewOrderScreen />
            </ScreenWrapper>
          </View>
          <Menu activeState={activeScreen} onChange={setActiveScreen} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    position: 'relative',
  },
  screen: {
    ...StyleSheet.absoluteFillObject, // para apilarse en el mismo espacio
  },
});
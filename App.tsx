import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/presentation/screens/HomeScreen';
import "./global.css"
<<<<<<< Updated upstream
=======
import HomeScreen from './src/presentation/screens/OrderScreen';
import CustomerScreen from './src/presentation/screens/CustomerScreen';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import NewOrderScreen from './src/presentation/screens/NewOrderScreen';
import colors from './src/theme/colors';
import OrderScreen from './src/presentation/screens/OrderScreen';
import SettingsScreen from '@/presentation/screens/SettingsScreen';

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
>>>>>>> Stashed changes

enum MainScreenState {
  MAIN,
  SETTINGS
}

export default function App() {
<<<<<<< Updated upstream
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
=======
  const [fontsLoaded] = useFonts(fontMap);
  const [activeScreen, setActiveScreen] = useState<MenuState>(MenuState.ORDERS);
  const [mainScreen, setMainScreen] = useState<MainScreenState>(MainScreenState.MAIN);

  if (!fontsLoaded) {
    return null;
  }

  applyDefaultFont('Roboto-Regular');

  if (mainScreen === MainScreenState.SETTINGS) {
    return  <SettingsScreen />;
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }} edges={['top']}>
          <TopBar screenTitle={activeScreen} onIconPress={() => setMainScreen(MainScreenState.SETTINGS)}/>
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
    ...StyleSheet.absoluteFillObject,
  },
});
>>>>>>> Stashed changes

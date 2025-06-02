import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/presentation/screens/HomeScreen';
import Menu from '@/presentation/components/Menu';
import { applyDefaultFont } from './src/theme/setupFonts';
import { useFonts } from 'expo-font';
import { fontMap } from './src/theme/fonts';
import "./global.css"


export default function App() {
  const [fontsLoaded] = useFonts(fontMap);

  if (!fontsLoaded) {
    return null;
  }

  applyDefaultFont('Roboto-Regular');

  return (
    <SafeAreaProvider>
      <HomeScreen />
      <Menu/>
    </SafeAreaProvider>
  );
}
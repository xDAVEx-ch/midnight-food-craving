import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/config/theme';

/* 
  https://blog.nona.digital/using-google-fonts-with-react-native-expo/
  FontName_numberSizeWeight 
*/
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Navigation } from './src/navigation';

import { RestaurantContextProvider } from './src/services/restaurant/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';

/* SafeAreaView keeps the app inside te correct boundaries. Only for IOS version 11*/
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <PaperProvider>
            <Navigation />
          </PaperProvider>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}

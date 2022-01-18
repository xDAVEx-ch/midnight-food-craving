import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';

import { RestaurantsScreen } from './src/screens/restaurants.screen';

/* SafeAreaView keeps the app inside te correct boundaries. Only for IOS version 11*/
export default function App() {
  return (
    <PaperProvider>
      <RestaurantsScreen />
    </PaperProvider>
  );
}

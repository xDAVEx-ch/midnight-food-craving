import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/config/theme';
import { Text } from 'react-native';

/* 
  https://blog.nona.digital/using-google-fonts-with-react-native-expo/
  FontName_numberSizeWeight 
*/
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/screens/restaurants.screen';
import { SafeArea } from './src/utils/safe-area.component';
import { RestaurantContextProvider } from './src/services/restaurant/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: 'fast-food-outline',
  Map: 'location-outline',
  Settings: 'settings-outline',
};

/* Our options including "headerShown: false" to hide the header and an objet togive style to label text*/
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarLabelStyle: { width: '100%' },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarHideOnKeyboard: true,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}

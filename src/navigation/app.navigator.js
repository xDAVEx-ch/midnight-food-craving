import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SafeArea } from './../utils/safe-area.component';
import { MapScreen } from './../screens/maps.screen';
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'fast-food-outline',
  Map: 'location-outline',
  Settings: 'settings-outline',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

/* Our options including "headerShown: false" to hide the header and an objet togive style to label text*/
/* header it`s visible for stack and tab navigatio by default */
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

/* Now, we start from tabs passing down to navigators which contain */
export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);

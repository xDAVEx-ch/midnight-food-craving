import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from './../screens/restaurants.screen';
import { RestaurantDetailScreen } from '../screens/restaurant-details.screen';

//const RestaurantStack = createStackNavigator(); x5
const RestaurantStack = createNativeStackNavigator();

/* header it`s visible for stack and tab navigatio by default */
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      })}
    >
      <RestaurantStack.Screen
        name="RestaurantsView"
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetailView"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

import React from 'react';

import { RestaurantInfoCard } from '../components/restaurant-card/restaurant-info-card.component';

import { SafeArea } from '../utils/safe-area.component';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

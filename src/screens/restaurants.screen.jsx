import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-card/restaurant-info-card.component';

/*
if StatusBar.currentHeight exists, returns `margin-top: ${StatusBar.currentHeight}px`}
In IOS SafeAreaView protects us from this
*/
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

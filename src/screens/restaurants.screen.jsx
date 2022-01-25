import React from 'react';
import { SafeAreaView, StatusBar, FlatList } from 'react-native';

import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/restaurant-card/restaurant-info-card.component';
import { Spacer } from './../components/spacer/spacer.component';

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

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

/* contentContainerStyle defines the styles applied to the container RestaurantInfoCard*/
/* keyExtractor={(item) => item.name} using the name of our item as key for children components */
export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, FlatList } from 'react-native';

import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-card/restaurant-info-card.component';
import { Spacer } from './../components/spacer/spacer.component';
import { RestaurantsContext } from '../services/restaurant/restaurant.context';

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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

/* contentContainerStyle defines the styles applied to the container RestaurantInfoCard*/
/* keyExtractor={(item) => item.name} using the name of our item as key for children components */
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

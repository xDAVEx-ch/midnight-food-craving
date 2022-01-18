import React from 'react';
import { Card } from 'react-native-paper';

import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'some restaurant',
    icon,
    photos = 'https://dummyimage.com/600x400/2e062e/fff.jpg',
    address = 'Some random street',
    isOpenNow = true,
    rating = 4,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

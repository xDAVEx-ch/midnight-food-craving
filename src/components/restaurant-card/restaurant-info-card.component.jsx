import React from 'react';
import { SvgXml } from 'react-native-svg';
import start from '../../../assets/start';
import open from '../../../assets/open';
import { Spacer } from '../spacer/spacer.component';
import { Text } from './../typography/text.component';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Rating,
  BodyCard,
  SectionEnd,
  Icon,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'some restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://dummyimage.com/600x400/2e062e/fff.jpg'],
    address = 'Some random street',
    isOpenNow = true,
    rating = 4,
    isCloseTemporaly = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <BodyCard>
        <Info>
          <Text>{name}</Text>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={start} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </Info>
        <SectionEnd>
          {!isOpenNow && <Text variant="error">CLOSED TEMPORARILY</Text>}
          <Spacer position="right" size="large">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </SectionEnd>
      </BodyCard>
    </RestaurantCard>
  );
};

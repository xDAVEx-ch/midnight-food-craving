import React from 'react';
import { Image } from 'react-native';

import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import start from '../../../assets/start';
import open from '../../../assets/open';
import { Spacer } from '../spacer/spacer.component';
import { Text } from './../typography/text.component';

import styled from 'styled-components/native';

/*Every styled component receives this props element with the theme object */
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View``;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const BodyCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'some restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = 'https://dummyimage.com/600x400/2e062e/fff.jpg',
    address = 'Some random street',
    isOpenNow = true,
    rating = 4,
    isCloseTemp = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
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
          {isCloseTemp && <Text variant="error">CLOSED TEMPORARILY</Text>}
          <Spacer position="left" size="large">
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

import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';

import styled from 'styled-components/native';

import { Search } from '../components/search-map/search-map.component';

import { LocationContext } from '../services/location/location.context';
import { RestaurantsContext } from '../services/restaurant/restaurant.context';
import { MapCallout } from '../components/map-callout/map-callout';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

/* 
  latitudeDelta and longitudeDelta are created using pairs of latitude and longitude
  to form a square indicating the region and zoom level to show on the screen (viewport)
  https://i.stack.imgur.com/LuVWM.png
*/

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

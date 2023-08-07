import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../context/slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const Map = () => {
  const mapRef = useRef(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      className="flex-1"
      initialRegion={{
        latitude: origin?.location.lat || 0,
        longitude: origin?.location.lng || 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
          pinColor="black"
        />
      )}

      {origin && destination && (
        <MapViewDirections
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          apikey={GOOGLE_MAPS_API_KEY}
          mode="DRIVING"
          strokeWidth={4}
          onReady={(response) => {
            dispatch(
              setTravelTimeInformation({
                distance: response.distance,
                duration: response.duration,
              })
            );
          }}
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
          pinColor="black"
        />
      )}
    </MapView>
  );
};

export default Map;

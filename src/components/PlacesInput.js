import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PlacesInput = ({ setter, placeholder, navigate }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      minLength={2}
      enablePoweredByContainer={false}
      fetchDetails={true}
      styles={{
        container: {
          flex: 0,
          marginBottom: 30,
          marginHorizontal: 10,
        },
        textInputContainer: {
          borderRadius: 20,
          marginHorizontal: 10,
        },

        textInput: {
          height: 45,
          fontSize: 16,
          backgroundColor: "rgb(229, 231, 235)",
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      onPress={(data, details = null) => {
        dispatch(
          setter({
            location: details.geometry.location,
            description: data.description,
          })
        );
        if (navigate) {
          navigate();
        }
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
    />
  );
};

export default PlacesInput;

import { Text, View } from "react-native";
import React from "react";
import PlacesInput from "../components/PlacesInput";
import { setDestination } from "../context/slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const NavigateScreen = () => {
  const navigation = useNavigation();
  const ridesNavigation = () => {
    navigation.navigate("RideOptions");
  };
  const eatsNavigation = () => {
    navigation.navigate("Eats");
  };

  return (
    <View className="flex-1 bg-white flex-shrink">
      <Text className="text-center py-5 text-xl">Good Morning, Barış</Text>
      <PlacesInput
        placeholder={"where to?"}
        setter={setDestination}
        navigate={ridesNavigation}
      />
      <NavFavourites setter={setDestination} screenName="RideOptions" />
      <View className=" mt-3 flex-row justify-around ">
        <Button
          title="Rides"
          onPress={ridesNavigation}
          iconName="car"
          type="font-awesome"
        />
        <Button
          title="Eats"
          onPress={eatsNavigation}
          iconName="fast-food-outline"
          type="ionicon"
        />
      </View>
    </View>
  );
};

export default NavigateScreen;

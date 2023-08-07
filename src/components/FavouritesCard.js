import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { useDispatch } from "react-redux";

const FavouritesCard = ({
  icon,
  location,
  destination,
  lat,
  long,
  setter,
  screenName,
  index,
  dataLength,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLatsChild = index === dataLength - 1;
  const onPressHandler = () => {
    dispatch(
      setter({
        location: { lat: lat, lng: long },
        description: destination,
      })
    );
    navigation.navigate(screenName);
  };
  return (
    <TouchableOpacity onPress={onPressHandler} className="mr-2">
      <View className="flex-row p-2 items-center mb-1 ">
        <View className="bg-gray-300 rounded-full p-2 mx-3 ">
          <Icon name={icon} color="#fff" />
        </View>
        <View>
          <Text className="font-bold text-lg">{location}</Text>
          <Text className="text-xs text-gray-400">{destination}</Text>
        </View>
      </View>
      {!isLatsChild ? (
        <View style={{ height: 1 }} className="w-full  bg-gray-300"></View>
      ) : null}
    </TouchableOpacity>
  );
};

export default FavouritesCard;

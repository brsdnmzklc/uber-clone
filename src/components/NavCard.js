import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { useSelector } from "react-redux";
import { selectOrigin } from "../context/slices/navSlice";
const NavCard = ({ title, img, screen }) => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const screenNavigator = () => {
    navigation.navigate(screen);
  };

  return (
    <TouchableOpacity
      onPress={screenNavigator}
      className="items-center mx-3 bg-gray-200 px-5 py-6 justify-center rounded "
      style={!origin && { opacity: 0.4 }}
      disabled={!origin}
    >
      <Image
        resizeMode="contain"
        className="h-28 w-28 mb-2"
        source={{
          uri: img,
        }}
      />
      <Text className="font-semibold">{title}</Text>

      <View className="rounded-full bg-black p-2 mt-2">
        <Icon size={25} name="arrowright" color="white" type="antdesign" />
      </View>
    </TouchableOpacity>
  );
};

export default NavCard;

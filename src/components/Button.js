import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

const Button = ({ title, iconName, type, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row bg-black w-24 rounded-full px-3 py-2 items-center"
    >
      <Icon type={type} name={iconName} size={20} color="#fff" />
      <Text className="text-white ml-2">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

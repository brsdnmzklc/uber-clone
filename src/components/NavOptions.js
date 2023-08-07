import { View, Text, FlatList } from "react-native";
import React from "react";
import NavCard from "./NavCard";

const NavOptions = () => {
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "Map",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "Eats",
    },
  ];

  return (
    <View className="items-center">
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <NavCard
            key={item.id}
            title={item.title}
            img={item.image}
            screen={item.screen}
          />
        )}
      />
    </View>
  );
};

export default NavOptions;

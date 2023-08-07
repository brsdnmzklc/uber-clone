import { View, Text, FlatList } from "react-native";
import React from "react";
import FavouritesCard from "./FavouritesCard";
const NavFavourites = ({ setter, screenName }) => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Aydınevler Mahallesi, Antalya, Türkiye",
      lat: 36.78638746034383,
      long: 31.422795957673017,
    },
    {
      id: "456",
      icon: "work",
      location: "Work",
      destination: "Ilıca Gültepe Köyü, Antalya, Türkiye",
      lat: 36.80913941883743,
      long: 31.390551589502223,
    },
  ];
  return (
    <View className="ml-4  mt-3">
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <FavouritesCard
            icon={item.icon}
            location={item.location}
            destination={item.destination}
            lat={item.lat}
            long={item.long}
            setter={setter}
            screenName={screenName}
            index={index}
            dataLength={data.length}
          />
        )}
      />
    </View>
  );
};

export default NavFavourites;

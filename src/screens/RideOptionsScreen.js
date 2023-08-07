import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectTravelTimeInformation,
} from "../context/slices/navSlice";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import RideOptionCard from "../components/RideOptionCard";
const RideOptionsScreen = () => {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestination);
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const data = [
    {
      id: "Uber-X-123",
      title: "Uber X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];

  return (
    <View className="relative bg-white flex-1">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-3 left-3 bg-white   z-50"
      >
        <Icon name="chevron-left" size={30} />
      </TouchableOpacity>
      <Text className="text-center mt-3 text-xl font-semibold">
        Select a Ride-{Math.round(travelTimeInformation?.distance)} KM
      </Text>
      <View className="">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <RideOptionCard
              img={item.image}
              title={item.title}
              multiplier={item.multiplier}
              id={item.id}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          )}
        />
      </View>
      <TouchableOpacity
        className="flex-1 bg-black justify-center items-center my-2 mx-3"
        style={!selectedItem && { backgroundColor: "#D3D3D3" }}
        disabled={!selectedItem}
      >
        <Text className="text-white text-xl ">
          Choose {selectedItem?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RideOptionsScreen;

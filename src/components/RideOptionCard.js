import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../context/slices/navSlice";

const RideOptionCard = ({
  img,
  title,
  multiplier,
  id,
  setSelectedItem,
  selectedItem,
}) => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <>
      {travelTimeInformation && (
        <TouchableOpacity
          onPress={() =>
            setSelectedItem({
              id: id,
              title: title,
            })
          }
          className={
            selectedItem?.id === id
              ? " flex-row items-center p-1  justify-between px-10 bg-gray-200"
              : " flex-row items-center p-1  justify-between px-10"
          }
        >
          <Image
            resizeMode="contain"
            source={{ uri: img }}
            className="h-20 w-20"
          />
          <View className="justify-center mr-6 ">
            <Text className="text-xl font-semibold  ">{title}</Text>
            <Text className="">
              {travelTimeInformation.duration > 60
                ? `${Math.round(
                    travelTimeInformation.duration / 60
                  )} hours ${Math.round(
                    travelTimeInformation.duration % 60
                  )} minutes`
                : `${Math.round(travelTimeInformation.duration)} minutes`}
            </Text>
          </View>
          <Text className="text-xl ">
            £
            {Math.round(
              multiplier * (travelTimeInformation?.distance / 1.6) * 1.24
            )}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default RideOptionCard;

import { Image, SafeAreaView, Pressable, View, Keyboard } from "react-native";
import React from "react";
import GlobalStyle from "../GlobalStyle";
import NavOptions from "../components/NavOptions";
import PlacesInput from "../components/PlacesInput";
import NavFavourites from "../components/NavFavourites";
import { setOrigin } from "../context/slices/navSlice";

const HomeScreen = () => {
  return (
    <Pressable
      onPress={() => Keyboard.dismiss()}
      className="bg-white flex-1"
      style={GlobalStyle.safeArea}
    >
      <View className="mx-2 items-center">
        <Image
          resizeMode="contain"
          className="h-28 w-28 "
          source={{ uri: "http://links.papareact.com/gzs" }}
        />
      </View>
      <PlacesInput setter={setOrigin} placeholder={"where from?"} />
      <NavOptions />
      <NavFavourites setter={setOrigin} screenName="Map" />
    </Pressable>
  );
};

export default HomeScreen;

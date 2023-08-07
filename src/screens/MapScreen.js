import {
  View,
  Text,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import GlobalStyle from "../GlobalStyle";
import Map from "../components/Map";
import NavigateScreen from "./NavigateScreen";
import RideOptionsScreen from "./RideOptionsScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MapScreen = () => {
  return (
    <Pressable
      className="flex-1"
      style={GlobalStyle.safeArea}
      onPress={() => Keyboard.dismiss()}
    >
      <View className="flex-1">
        <Map />
      </View>

      <View className="flex-1">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Navigate" component={NavigateScreen} />
          <Stack.Screen name="RideOptions" component={RideOptionsScreen} />
        </Stack.Navigator>
      </View>
    </Pressable>
  );
};

export default MapScreen;

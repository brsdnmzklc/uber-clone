import AppProvider from "./src/context/Provider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import EatsScreen from "./src/screens/EatsScreen";
import { KeyboardAvoidingView, Platform } from "react-native";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Eats" component={EatsScreen} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

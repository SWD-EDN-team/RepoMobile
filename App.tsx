import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types/NavigationTypes";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import DescriptionCardScreen from "./screens/DescriptionCardScreen/DescriptionCardScreen";
import SignUpScreen from "./screens/SignUp/Signup"; 
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="DescriptionCard"
              component={DescriptionCardScreen}
            />
          </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

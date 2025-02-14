import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types/NavigationTypes";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DescriptionCardScreen from "./src/screens/DescriptionCardScreen/DescriptionCardScreen";
import SignUpScreen from "./src/screens/SignUp/Signup";
import DetailScreen from "./src/screens/DetailScreen/DetailScreen";
import { SafeAreaView } from "react-native";
import Login from "./src/screens/LoginScreen/Login";
import AddressScreen from "./src/screens/AddressScreen/AddressScreen";
import DemoScreen from "./src/screens/DemoScreen/DemoScreen";
import ShippingAddressScreen from "./src/screens/ShippingScreen/ShippingScreen";
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="Shipping"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Demo" component={DemoScreen} />
          <Stack.Screen name="SignIn" component={Login} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="DescriptionCard"
            component={DescriptionCardScreen}
          />
          <Stack.Screen 
            name="Detail"
            component={DetailScreen}
          />
          <Stack.Screen
            name="Address"
            component={AddressScreen}
          />
          <Stack.Screen
            name="Shipping"
            component={ShippingAddressScreen}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

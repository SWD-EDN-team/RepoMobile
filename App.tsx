import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/types/NavigationTypes";
import HomeScreen from "./src/app/screens/HomeScreen/HomeScreen";
import DescriptionCardScreen from "./src/app/screens/DescriptionCardScreen/DescriptionCardScreen";
import SignUpScreen from "./src/app/screens/SignUp/Signup";
import DetailScreen from "./src/app/screens/DetailScreen/DetailScreen";
import { SafeAreaView } from "react-native";
import Login from "./src/app/screens/LoginScreen/Login";
import AddressScreen from "./src/app/screens/AddressScreen/AddressScreen";
import CheckoutScreen from "./src/app/screens/CheckoutScreen/CheckoutScreen";
import FavoritePage from "@/app/(tabs)/favorite";
import DemoScreen from "./src/app/screens/DemoScreen/DemoScreen";
// import ShippingAddressScreen from "./src/app/screens/ShippingScreen/ShippingScreen";
import { Text } from "react-native";
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="Address"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={Login} />
          <Stack.Screen name="Favorite" component={FavoritePage} />
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen
            name="DescriptionCard"
            component={DescriptionCardScreen}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: true }}
          />

          <Stack.Screen
            name="Address"
            component={AddressScreen}
            options={{ headerShown: true }}
          />

          {/* <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: true }}
          /> */}

          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen} 
            options={{ headerShown: true }}
          />
          {/* <Stack.Screen name="Shipping" component={ShippingAddressScreen} /> */}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

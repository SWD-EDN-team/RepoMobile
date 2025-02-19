import { Slot, Stack } from "expo-router";
import { View, Text } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <RootSiblingParent>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="(auth)/signup"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="(auth)/login"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </RootSiblingParent>
  );
};

export default RootLayout;

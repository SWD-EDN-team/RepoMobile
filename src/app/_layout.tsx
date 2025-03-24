import { Slot, Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppProvider from "context/app.context";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootSiblingParent>
        <AppProvider>
          {/* <SafeAreaView style={{ flex: 1 }}> */}
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              contentStyle: { backgroundColor: "#fff" },
            }}
          >
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="auths"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="auths/verify"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="auths/login"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="auths/signup"
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="product/[id]"
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack>
          {/* </SafeAreaView> */}
        </AppProvider>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
};

export default RootLayout;

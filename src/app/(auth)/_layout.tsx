import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(auth)/login"
        options={{ tabBarStyle: { display: "none" } }}
      ></Tabs.Screen>
    </Tabs>
  );
};
export default TabLayout;

import { Tabs } from "expo-router";
import { View, Text } from "react-native";

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

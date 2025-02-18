import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index"></Tabs.Screen>
      <Tabs.Screen name="setting"></Tabs.Screen>
    </Tabs>
  );
};
export default TabLayout;

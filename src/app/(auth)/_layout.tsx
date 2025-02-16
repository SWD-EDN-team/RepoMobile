import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="quandba1"></Tabs.Screen>
      <Tabs.Screen name="login"></Tabs.Screen>
    </Tabs>
  );
};
export default TabLayout;

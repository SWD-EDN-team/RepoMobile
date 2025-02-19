import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index"></Tabs.Screen>
      <Tabs.Screen
        name="setting"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};
export default TabLayout;

import { APP_COLOR } from "@/utils/constant";
import { Tabs, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  const pathname = usePathname();
  const hiddenScreens = ["", ""];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: APP_COLOR.ORANGE,
        tabBarStyle: hiddenScreens.includes(pathname)
          ? { display: "none" }
          : {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: "/",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
   
      <Tabs.Screen
        name="favorite"
        options={{
          href: "/(tabs)/favorite",
          tabBarLabel: "Đã thích",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          href: "/(tabs)/notification",
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          href: "/(tabs)/account",
          tabBarLabel: "Tôi",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

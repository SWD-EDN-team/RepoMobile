import { Tabs, usePathname } from "expo-router";

const TabLayout = () => {
  const pathname = usePathname();

  const hiddenScreens = ["/auths/login", "/auths/verify", "/auths/signup"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: hiddenScreens.includes(pathname)
          ? { display: "none" }
          : {},
      }}
    >
      <Tabs.Screen name="login" options={{ href: "/auths/login" }} />
      <Tabs.Screen name="signup" options={{ href: "/auths/signup" }} />
      <Tabs.Screen name="verify" options={{ href: "/auths/verify" }} />
    </Tabs>
  );
};

export default TabLayout;

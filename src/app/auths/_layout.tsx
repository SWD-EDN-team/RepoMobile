import { Tabs, usePathname } from "expo-router";

const TabLayout = () => {
  const pathname = usePathname();

  console.log("Current pathname:", pathname);

  // Danh sách các trang không có tabBar
  const hiddenScreens = [
    "/auths/login",
    "/auths/verify",
    "/auths/signup",
    "/auths/welcome",
    "/auths/search",
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: hiddenScreens.includes(pathname)
          ? { display: "none" }
          : {
              borderTopWidth: 0,
              borderBottomWidth: 2,
              borderBottomColor: "#E0E0E0",
            },
      }}
    >
      <Tabs.Screen name="login" options={{ href: "/auths/login" }} />
      <Tabs.Screen name="signup" options={{ href: "/auths/signup" }} />
      <Tabs.Screen name="verify" options={{ href: "/auths/verify" }} />
      <Tabs.Screen name="welcome" options={{ href: "/auths/welcome" }} />
      <Tabs.Screen name="search" options={{ href: "/auths/search" }} />
    </Tabs>
  );
};

export default TabLayout;

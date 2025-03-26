import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import DrawerContent from "./DrawerContent";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

const EmptyScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 18, color: "#666" }}>Swipe right to open menu</Text>
  </View>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props : any) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Menu" component={EmptyScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
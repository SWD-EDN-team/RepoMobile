import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "components/DrawerContent";

const Drawer = createDrawerNavigator();

const EmptyScreen = () => (
  <></> // Màn hình trống chỉ để mở menu
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Menu" component={EmptyScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";

const HomeScreen: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}> = ({ navigation }) => {

  return (
    <View style={styles.homeScreen}>
      <Text>HomeScreen</Text>
      <Text>This is a scrollview</Text>
      <Text>This is a scrollview</Text>
      <Text>This is a scrollview</Text>
      <Text>This is a scrollview</Text>
      <Text>This is a scrollview</Text>
      <Text>This is a scrollview</Text>
      <Text>This is a scrollview</Text>
      <TouchableOpacity  style={styles.button}
        onPress={() => navigation.navigate("DescriptionCard")}
      >
        <Text>Go to DescriptionCard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, // Fill the screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    padding: 16, // Add some padding around the edges
  },
  button:{
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
  }
});

export default HomeScreen;

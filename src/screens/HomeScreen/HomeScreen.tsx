import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";

const HomeScreen: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}> = ({ navigation }) => {

  return (
    <View style={styles.homeScreen}>

      <TouchableOpacity  style={styles.button}
        onPress={() => navigation.navigate("DescriptionCard")}
      >
        <Text>Go to DescriptionCard</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button}
        onPress={() => navigation.navigate("Detail")}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Go to SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
  },
  button:{
    marginTop: 10,
    padding: 10,
    backgroundColor: "gray",
    color: "white",
    borderRadius: 5,
  }
});

export default HomeScreen;

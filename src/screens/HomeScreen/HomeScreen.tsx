import { View, Text,ScrollView, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";
import StatusBar from "../../components/StatusBar";

const HomeScreen: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}> = ({ navigation }) => {

  const handlePress = () => {
    alert("Press button");
  }

  return (
    <View style={styles.homeScreen}>
            <ScrollView>

            
      
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
      
      </ScrollView>
      <StatusBar title="title status bar" handlePress={handlePress}/>
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

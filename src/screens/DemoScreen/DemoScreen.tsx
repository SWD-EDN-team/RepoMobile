import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";
import StatusBar from "../../components/StatusBar";
import AddressCard from "../../components/AddressCard";

const DemoScreen: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "Demo">;
}> = ({ navigation }) => {
  const handlePress = () => {
    alert("Press button");
  };

  const address = {
    id: 1,
    name: "John Doe",
    street: "123 Main St",
  };

  return (
    <View style={styles.DemoScreen}>
      <ScrollView style={{padding:15}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DescriptionCard")}
        >
          <Text>Go to DescriptionCard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text>Go to details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text>Go to SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Address")}
        >
          <Text>Go to screen address</Text>
        </TouchableOpacity>

        <AddressCard data={address} />
      </ScrollView>
      <StatusBar title="title status bar" handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  DemoScreen: {
    flex: 1,

  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "gray",
    color: "white",
    borderRadius: 5,
  },
});

export default DemoScreen;

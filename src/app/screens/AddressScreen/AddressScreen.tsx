import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { Stack } from "expo-router";
import { fetchAddAddress } from "../../../utils/api"; 

const AddressScreen = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleSave = async () => {
    if (!name || !country || !city || !street) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      await fetchAddAddress(name, country, city, street);
      Alert.alert("Success", "Address added successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to add address.");
    }
  };
  return (
    <>
      <Stack.Screen options={{ title: "Thanh toán" }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>A new address</Text>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />

        {/* Country Input */}
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter country"
          value={country}
          onChangeText={setCountry}
        />

        {/* City Input */}
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
        />

        {/* Street Input */}
        <Text style={styles.label}>Street (Include house number)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter street"
          value={street}
          onChangeText={setStreet}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  containerButton: {
    marginTop: 20,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerbutton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddressScreen;

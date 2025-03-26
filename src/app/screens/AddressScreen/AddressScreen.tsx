import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const AddressScreen = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  return (
    <>
      <Stack.Screen options={{ title: "Thanh toán" }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>A new address</Text>
        </View>

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
          <TouchableOpacity style={styles.saveButton}>
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
});

export default AddressScreen;

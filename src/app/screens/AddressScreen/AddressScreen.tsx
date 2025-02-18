import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Dropdownmenu from "./dropdowmenu";

const AddressScreen = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [street, setStreet] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>A new address</Text>
      </View>

      <Text style={styles.label}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Mobile number</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />

      <Dropdownmenu />

      <Text style={styles.label}>Street (Include house number)</Text>
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
      />
      <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
    margin: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
    marginBottom: 50,
  },
  inputError: {
    borderColor: "red",
  },
  selectInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectText: {
    fontSize: 16,
    color: "#555",
  },
  saveButton: {
    backgroundColor: "#ff7043",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "70%",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerbutton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddressScreen;

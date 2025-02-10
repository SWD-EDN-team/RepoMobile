import { View, Text, TextInput, StyleSheet, Button, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/NavigationTypes";

const Signup: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}> = ({ navigation }) => {
  const [isFocusedFullName, setIsFocusedFullName] = useState<boolean>(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState<boolean>(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState<boolean>(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState<boolean>(false);

  const handleSignUp = () => {
    alert("Sign Up")
  }

  const navigationToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={[
            styles.inputForm,
            isFocusedFullName ? styles.inputFormForcus : "",
          ]}
          placeholder="Full Name"
          onFocus={() => setIsFocusedFullName(true)}
          onBlur={() => setIsFocusedFullName(false)}
        />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[
            styles.inputForm,
            isFocusedEmail ? styles.inputFormForcus : "",
          ]}
          placeholder="Email"
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[
            styles.inputForm,
            isFocusedPassword ? styles.inputFormForcus : "",
          ]}
          placeholder="Password"
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[
            styles.inputForm,
            isFocusedConfirmPassword ? styles.inputFormForcus : "",
          ]}
          placeholder="Confirm Password"
          onFocus={() => setIsFocusedConfirmPassword(true)}
          onBlur={() => setIsFocusedConfirmPassword(false)}
        />
      </View>
      <View style={styles.center}>
      <TouchableHighlight onPress={handleSignUp} style={styles.button}> 
        <View style={styles.button}  >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </View>
      </TouchableHighlight>
        <View style={styles.isAccount}>
          <Text style={styles.text}>Already have an account?</Text>
          <Text style={styles.link} onPress={navigationToLogin}>Login</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 26,
    backgroundColor: "#f2f2f2",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 9,
    color: "#9796A1",
  },
  inputForm: {
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#111719",
    fontSize: 17,
  },
  inputFormForcus: {
    borderColor: "#FE724C",
  },
  button: {
    // marginTop: 10,
    width: 248,
    height: 60,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FE724C",
    borderRadius: 28,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  isAccount: {
    display: "flex",
    flexDirection: "row",
    marginTop:20
  },
  text:{
    fontSize:16
  },
  link:{
    fontSize:16,
    color: "#FE724C"
  }
});

export default Signup;

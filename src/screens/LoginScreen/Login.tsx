import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RootStackParamList } from "../../types/NavigationTypes";

const Login: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "SignIn">;
}> = ({ navigation }) => {
  const [isEmailForcused, setIsEmailForcused] = useState(false);
  const [isPasswordForcused, setIsPasswordForcused] = useState(false);

  const handleGoSingUp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignUp" }],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, isEmailForcused && styles.isForcused]}
          placeholder="Email"
          onFocus={() => setIsEmailForcused(true)}
          onBlur={() => setIsEmailForcused(false)}
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, isPasswordForcused && styles.isForcused]}
          placeholder="Password"
          secureTextEntry={true}
          onFocus={() => setIsPasswordForcused(true)}
          onBlur={() => setIsPasswordForcused(false)}
        />
      </View>
      <View style={styles.col_center}>
        <Text
          style={styles.forgotPassword}
          onPress={() => alert("already confirmed ")}
        >
          Forgot password?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={() => alert("Login")}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          <Text style={styles.signUp} onPress={handleGoSingUp}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    padding: 26,
  },
  header: {
    fontSize: 36.41,
    fontFamily: "Roboto",
    fontWeight: "600",
    alignSelf: "flex-start",
    color: "#333333",
    lineHeight: 43.7,
    marginBottom: 20,
  },
  input: {
    height: 65,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#333333",
  },
  label: {
    color: "#9796A1",
    marginBottom: 5,
    fontSize: 16,
    alignSelf: "flex-start",
  },
  isForcused: {
    borderColor: "#FE724C",
  },
  forgotPassword: {
    color: "#FE724C",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    width: 248,
    height: 60,
    backgroundColor: "#FE724C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28.5,
    marginTop: 20,
  },
  signUpContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  textButton: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    lineHeight: 17.58,
  },
  signUp: {
    color: "#FE724C",
    fontSize: 14,
    fontWeight: "500",
  },
  col_center:{
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default Login;

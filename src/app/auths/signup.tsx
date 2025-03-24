import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerApi } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-root-toast";
import { RegisterSchema } from "@/utils/validate.schema";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
  inputGroup: {
    padding: 5,
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderColor: "#d0d0d0",
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async (
    name: string,
    password: string,
    email: string
  ) => {
    try {
      const res = await registerApi(name, email, password);
      console.log("res : ", res.data);

      if (res.data && name && email && password) {
        router.navigate({
          pathname: "/auths/verify",
          params: { email: email },
        });
      } else {
        Toast.show("Please enter vô di", {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1,
          position: -50,
          containerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          },
        });
      }
    } catch (error) {
      console.log("Failed to register:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        validationSchema={RegisterSchema}
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) =>
          handleSignUp(values.name, values.password, values.email)
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 600,
                  marginVertical: 10,
                }}
              >
                Sign Up
              </Text>
            </View>
            <ShareInput
              title="Full Name"
              // value={name}
              // setValue={setName}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              error={errors.name}
            ></ShareInput>
            <ShareInput
              title="Email"
              // value={email}
              // setValue={setEmail}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
            ></ShareInput>
            <ShareInput
              title="Password"
              secureTextEntry
              // value={password}
              // setValue={setPassword}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
            ></ShareInput>
            {/* <View style={{ marginVertical: 10 }} /> */}
            <ShareButton
              title="Sign Up "
              onPress={handleSubmit as any}
              textStyleee={{
                textTransform: "uppercase",
                color: "#fff",
                paddingVertical: 5,
                fontWeight: "bold",
              }}
              btnStyle={{
                justifyContent: "center",
                borderRadius: 30,
                marginHorizontal: 50,
                paddingVertical: 10,
                backgroundColor: APP_COLOR.ORANGE,
              }}
              pressStyle={{ alignSelf: "stretch" }}
            ></ShareButton>

            <SocialButton></SocialButton>
            <View
              style={{
                marginVertical: 15,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Đã có tài khoản ?
              </Text>
              <Link href={"/auths/login"}>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  Đăng Nhập
                </Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpPage;

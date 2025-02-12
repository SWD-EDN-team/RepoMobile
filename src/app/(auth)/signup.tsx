import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerApi } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const fetchApi = async () => {
    const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;
    console.log("URL_BACKEND", URL_BACKEND);

    try {
      const res = await axios.get(URL_BACKEND!);
      console.log(res.data);
      console.log("connected to successfully");
    } catch (error: any) {
      console.error("check error >> :", error.message);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleSignUp = async () => {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/v1/api/users`;
    try {
      const res = await registerApi(name, email, password);
      if(res.data) {
        router.navigate("/(auth)/verify");
      }
      // console.log(res.data);
    } catch (error) {
      console.log("check error >>???? :", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          value={name}
          setValue={setName}
        ></ShareInput>
        <ShareInput
          title="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        ></ShareInput>
        <ShareInput
          title="Password"
          secureTextEntry
          value={password}
          setValue={setPassword}
        ></ShareInput>
        {/* <View style={{ marginVertical: 10 }} /> */}
        <ShareButton
          title="Sign Up "
          onPress={handleSignUp}
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
          <Link href={"/(auth)/signup"}>
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
    </SafeAreaView>
  );
};

export default SignUpPage;

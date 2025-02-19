import { View, Text, SafeAreaView } from "react-native";
import { Link,router } from "expo-router";
import ShareInput from "@/components/input/share.input";
import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import SocialButton from "@/components/button/social.button";
import { useState } from "react";

const user= {
  email:"admin@gmail.com",
  passwrod: "123456"
}

const Login = () => {
  
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        if(email===user.email && password===user.passwrod){
          router.navigate("/screens/HomeScreen/HomeScreen")
        }else{
          alert("Login Failed")
        }
      };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          gap: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 600,
              marginVertical: 10,
            }}
          >
            Login
          </Text>
        </View>
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
          onPress={handleLogin}
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
            Don't have an account?
          </Text>
          <Link href={"/(auth)/signup"}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

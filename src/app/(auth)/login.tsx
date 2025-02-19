import { Link, router } from "expo-router";
import ShareInput from "@/components/input/share.input";
import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import SocialButton from "@/components/button/social.button";
import { useState } from "react";
import { Formik } from "formik";

const user = {
  email: "admin@gmail.com",
  passwrod: "123456",
};
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { LoginSchema } from "@/utils/validate.schema";

const Login = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [Loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);

    if (email === user.email && password === user.passwrod) {
      setLoading(false);
      router.navigate("/screens/DetailScreen/DetailScreen");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values.email, values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
            ></ShareInput>
            <ShareInput
              title="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
            ></ShareInput>
            {/* <View style={{ marginVertical: 10 }} /> */}
            <ShareButton
              loading={Loading}
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
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

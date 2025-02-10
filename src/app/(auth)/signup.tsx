import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 600,
              marginVertical: 30,
            }}
          >
            Sign Up
          </Text>
        </View>
        <ShareInput title="Full Name"></ShareInput>
        <ShareInput title="Email" keyboardType="email-address"></ShareInput>
        <ShareInput title="Password" secureTextEntry></ShareInput>
        <View style={{ marginVertical: 10 }} />
        <ShareButton
          title="Sign Up "
          onPress={() => {
            alert("ok");
          }}
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
              color: "white",
              fontWeight: "bold",
            }}
          >
            Đã có tài khoản ?
          </Text>
          <Link href={"/(auth)/signup"}>
            <Text
              style={{
                color: "white",
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

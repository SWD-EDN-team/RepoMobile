import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import ShareButton from "@/components/button/share.button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { APP_COLOR } from "@/utils/constant";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import BG from "@/assets/auth/welcome-background.png";
import BG2 from "@/assets/auth/welcome-bg.jpeg";
import fbLogo from "@/assets/auth/facebook.png";
import googleLogo from "@/assets/auth/google.png";
import { LinearGradient } from "expo-linear-gradient";
import TextBetweenLine from "@/components/text.between";
import { Link, Redirect } from "expo-router";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  welcomeText: {
    flex: 0.6,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  welcomeBtn: {
    flex: 0.4,
    gap: 30,
  },
  heading: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 40,
  },
  body: {
    fontSize: 30,
    color: APP_COLOR.ORANGE,
    marginVertical: 10,
    fontWeight: 600,
  },
  footer: {
    fontSize: 16,
    color: "#008080",
    fontWeight: "bold",
  },
});

const WelcomePage = () => {
  if (true) {
    return (
      <Redirect href={"/screens/CartScreen/ShoppingCartScreen"}></Redirect>
    );
  }
  return (
    <ImageBackground style={{ flex: 1 }} source={BG2}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        locations={[0.2, 0.8]}
      >
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.heading}>Welcome toe</Text>
            <Text style={styles.body}>@Quandba_clothers</Text>
            <Text style={styles.footer}>
              Nền tảng bán áo quần trực tuyến tại Việt Nam
            </Text>
          </View>
          <View style={styles.welcomeBtn}>
            <TextBetweenLine title="Đăng nhập với"></TextBetweenLine>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
              }}
            >
              <ShareButton
                title="FACEBOOK"
                onPress={() => alert("me")}
                btnStyle={{
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  borderRadius: 30,
                }}
                icons={<Image source={fbLogo}></Image>}
              ></ShareButton>
              <ShareButton
                title="GOOGLE"
                onPress={() => alert("me")}
                btnStyle={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  borderRadius: 30,
                }}
                icons={<Image source={googleLogo}></Image>}
              ></ShareButton>
            </View>
            <View>
              <ShareButton
                title="Đăng nhập với email"
                onPress={() => {
                  alert("ok");
                }}
                textStyleee={{
                  color: "#fff",
                  paddingVertical: 5,
                  fontWeight: "bold",
                }}
                btnStyle={{
                  justifyContent: "center",
                  borderRadius: 30,
                  marginHorizontal: 50,
                  paddingVertical: 10,
                  backgroundColor: "#2c2c2c",
                  borderColor: "#505050",
                  borderWidth: 1,
                }}
                pressStyle={{ alignSelf: "stretch" }}
              ></ShareButton>
            </View>
            <View
              style={{
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
                Chưa có tài khoản ?
              </Text>
              <Link href={"/(auth)/signup"}>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  }}
                >
                  Đăng Ký.
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WelcomePage;

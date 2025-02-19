import TextBetweenLine from "@/components/text.between";
import ShareButton from "./share.button";
import { View, Text, Image, StyleSheet } from "react-native";
import fbLogo from "@/assets/auth/facebook.png";
import googleLogo from "@/assets/auth/google.png";

const styles = StyleSheet.create({
  welcomeBtn: {
    flex: 1,
    gap: 30,
  },
});
const SocialButton = () => {
  return (
    <View style={styles.welcomeBtn}>
      <TextBetweenLine title="Login with" textColor="black"></TextBetweenLine>
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
    </View>
  );
};
export default SocialButton;

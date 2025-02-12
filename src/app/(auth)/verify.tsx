import { APP_COLOR } from "@/utils/constant";
import { View, Text, StyleSheet } from "react-native";
import OTPTextView from "react-native-otp-textinput";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

const VerifyPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vefification Code</Text>
      <Text style={{ marginVertical: 10, fontSize: 16, opacity: 0.5 }}>
        Please type the verification code sent to quandba@gmail.com
      </Text>
      <View style={{ marginVertical: 20 }}>
        <OTPTextView
          inputCount={5}
          inputCellLength={1}
          tintColor={APP_COLOR.ORANGE}
          keyboardType="number-pad"
          textInputStyle={{
            borderWidth: 1,
            borderBlockColor: APP_COLOR.GREY,
            borderBottomWidth: 1,
            borderRadius: 5,
            //@ts-ignore:next-line
            color: APP_COLOR.ORANGE,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontWeight: "600" }}>I don’t recevie a code! </Text>
        <Text
          style={{
            fontWeight: "600",
            textDecorationLine: "underline",
            color: APP_COLOR.ORANGE,
          }}
        >
          Please resend
        </Text>
      </View>
    </View>
  );
};

export default VerifyPage;

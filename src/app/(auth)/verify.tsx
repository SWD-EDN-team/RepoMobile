import LoadingOverlay from "@/components/loading/overlay";
import { verifyCodeApis } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { useLocalSearchParams } from "expo-router";
import { useState, useRef } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Toast from "react-native-root-toast";

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
  const [isSummit, setIsSummit] = useState<boolean>(false);

  const otpRef = useRef<OTPTextView>(null);
  const [code, setCode] = useState<string>("");

  const { email } = useLocalSearchParams();
  console.log("Verifyingsokoskmd", email);

  const handleCellTextChange = async (text: string, i: number) => {
    console.log("check code", code);

    console.log(">>> check text: ", text, " and i = ", i);
    if (code && code.length === 4 && i === 4) {
      Keyboard.dismiss();
      setIsSummit(true);
      const res = await verifyCodeApis(code, "quandba154@gmail.com");
      setIsSummit(false);
      // otpRef?.current.clear();

      if (res.data) {
        alert("success");
        // setIsSummit(false);
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
    }
  };
  console.log("check code", code);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Vefification Code</Text>
        <Text style={{ marginVertical: 10, fontSize: 16, opacity: 0.5 }}>
          Please type the verification code sent to {email}
        </Text>
        <View style={{ marginVertical: 20 }}>
          <OTPTextView
            ref={otpRef}
            handleTextChange={setCode}
            handleCellTextChange={handleCellTextChange}
            autoFocus
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
      {isSummit && <LoadingOverlay></LoadingOverlay>}
    </>
  );
};

export default VerifyPage;

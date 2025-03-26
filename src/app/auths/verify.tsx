import LoadingOverlay from "@/components/loading/overlay";
import { verifyCodeApis } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, useLocalSearchParams } from "expo-router";
import { useState, useRef, useEffect } from "react";
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
  const [otp, setOtp] = useState<string>("");

  const { email } = useLocalSearchParams();
  console.log("Verifyingsokoskmd", email);

  const verifyCode = async () => {
    Keyboard.dismiss();
    setIsSummit(true);
    const res = await verifyCodeApis(otp, email as string);
    setIsSummit(false);
    console.log(">>> check res: ", res);
    router.navigate("/auths/login");

    if (res && res.data) {
      console.log("API response is valid:", res.data);
    } else {
      console.error("API response is invalid:", res);
    }

    if (res.data) {
      // alert("success");
      otpRef?.current?.clear();
      Toast.show("Kích hoạt tài khoản thành công", {
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
      router.navigate("/auths/login");
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
  };

  console.log("check otp>>>>", otp);

  const handleResendCode = async () => {
    otpRef?.current?.clear();
    //call api resend code
    // if(res)
  };

  useEffect(() => {
    if (otp.length === 5) {
      verifyCode();
    }
  }, [otp]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={{ marginVertical: 10, fontSize: 16, opacity: 0.5 }}>
          Please type the verification code sent to {email}
        </Text>
        <View style={{ marginVertical: 20 }}>
          <OTPTextView
            ref={otpRef}
            handleTextChange={setOtp}
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
            onPress={handleResendCode}
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

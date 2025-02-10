import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

const styles = StyleSheet.create({
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
    borderRadius: 10,
  },
});

interface Ipops {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}
const ShareInput = (props: Ipops) => {
  const { title, keyboardType, secureTextEntry } = props;

  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.text}>{title}</Text>}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardType={keyboardType}
        style={[
          styles.input,
          { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY },
        ]}
        secureTextEntry={secureTextEntry}
      ></TextInput>
      <FontAwesome5 name="eye" size={15} color="black" />
    </View>
  );
};

export default ShareInput;

import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  TextStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { ReactNode } from "react";
import { APP_COLOR } from "@/utils/constant";

interface Ipops {
  title: string;
  onPress: () => void;
  textStyleee?: StyleProp<TextStyle>;
  pressStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<TextStyle>;
  icons?: ReactNode;
}

const ShareButton = (props: Ipops) => {
  const { title, onPress, textStyleee, pressStyle, btnStyle, icons } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1, alignSelf: "flex-start" },
        pressStyle as ViewStyle,
      ]}
      onPress={onPress}
    >
      <View style={[styles.btnContainer, btnStyle as ViewStyle]}>
        {icons}
        <Text style={textStyleee}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
  },
  btnContainer: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: APP_COLOR.ORANGE,
  },
});

export default ShareButton;

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
  ActivityIndicator,
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
  loading?: boolean;
}

const ShareButton = (props: Ipops) => {
  const {
    title,
    onPress,
    textStyleee,
    pressStyle,
    btnStyle,
    icons,
    loading = false,
  } = props;

  return (
    <Pressable
      disabled={loading}
      style={({ pressed }) => [
        { opacity: pressed == true ? 0.5 : 1, alignSelf: "flex-start" },
        pressStyle as ViewStyle,
      ]}
      onPress={onPress}
    >
      <View style={[styles.btnContainer, btnStyle as ViewStyle]}>
        {loading && <ActivityIndicator></ActivityIndicator>}
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

import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Ipops {
  title: string;
  onPress: () => void;
}
const MineButtons = (props: Ipops) => {
  const { title, onPress } = props;
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed === true ? 0.5 : 1,
        alignSelf: "flex-start",
      })}
      onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <AntDesign name="pluscircle" size={25} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textTransform: "uppercase",
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#ccc",
  },
});

export default MineButtons;

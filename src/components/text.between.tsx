import { View, Text } from "react-native";

interface Ipops {
  title: string;
  color?: string;
}

const TextBetweenLine = (props: Ipops) => {
  const { title, color } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingHorizontal: 35,
        }}
      ></View>
      <Text style={{ color, position: "relative", top: 10 }}>
        {title}
      </Text>
      <View
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingHorizontal: 35,
        }}
      ></View>
    </View>
  );
};

export default TextBetweenLine;

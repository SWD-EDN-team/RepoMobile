import { View, Text } from "react-native";

const FavoritePage = () => {
  return (
    <View
      style={{
        backgroundColor: "pink",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
        FavoritePage
      </Text>
    </View>
  );
};

export default FavoritePage;

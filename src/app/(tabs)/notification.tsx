import { View, Text } from "react-native";

const NotificationPage = () => {
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
        NotificationPage
      </Text>
    </View>
  );
};

export default NotificationPage;

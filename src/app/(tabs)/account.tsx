import { View, Text } from "react-native";

const AccountPage = () => {
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
        AccountPage
      </Text>
    </View>
  );
};

export default AccountPage;

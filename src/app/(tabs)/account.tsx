import { useCurrentTheme } from "@/context/app.context";
import { View, Text } from "react-native";

const AccountPage = () => {
  const { theme } = useCurrentTheme();
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
        AccountPage11, theme = {theme}
      </Text>
    </View>
  );
};

export default AccountPage;

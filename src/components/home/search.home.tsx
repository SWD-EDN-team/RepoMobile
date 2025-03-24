import { View, Text, StyleSheet } from "react-native";
import { APP_COLOR } from "@/utils/constant";
import { EvilIcons } from "@expo/vector-icons";

const SearchHome = () => {
  return (
    <View style={styles.searchSection}>
      <EvilIcons name="search" size={20} color="black" />
      <Text style={styles.searchText}>Deal Hôm Nay Từ 0đ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: APP_COLOR.GREY,
    gap: 5,
    marginBottom: 3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  searchText: {
    color: "#707070",
    fontSize: 14,
  },
});

export default SearchHome;

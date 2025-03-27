import { View, Text, StyleSheet, Pressable } from "react-native";
import { APP_COLOR, APP_FONT } from "@/utils/constant";
import { EvilIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SearchHome = () => {
  return (
    <Pressable onPress={() => router.navigate("/auths/search")}>
      <View style={styles.searchSection}>
        <EvilIcons name="search" size={20} color="black" />
        <Text style={styles.searchText}>Deal Hôm Nay Từ 0đ...</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    gap: 5,
    flexDirection: "row",
    margin: 5,
    paddingHorizontal: 3,
    paddingVertical: 7,
    borderRadius: 3,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: APP_COLOR.GREY,
    gap: 5,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  searchText: {
    color: "#707070",
    fontSize: 14,
    fontFamily: APP_FONT,
  },
});

export default SearchHome;

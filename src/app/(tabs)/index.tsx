import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import avt from "@/assets/homepage/avt.png";
import { APP_COLOR } from "@/utils/constant";
import Entypo from "@expo/vector-icons/Entypo";
import BannerHome from "@/components/home/banner.home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
  },
  headerContainer: {
    flex: 0.1,
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 0.6,
    borderColor: "green",
    borderWidth: 1,
  },
});
const HomeTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Entypo name="menu" size={24} color="black" />
        <View style={styles.headerText}>
          <Text style={{ color: APP_COLOR.GREY, fontWeight: "bold" }}>
            Deliver to
          </Text>
          <Text style={{ color: APP_COLOR.ORANGE, fontWeight: 600 }}>
            4102 Pretty View Lane{" "}
          </Text>
        </View>
        <ImageBackground
          style={{
            flex: 0.2,
            height: 60,
            borderRadius: 30,
            overflow: "hidden",
          }}
          source={avt}
        ></ImageBackground>
      </View>
      <Text style={styles.bodyContainer}>
        <BannerHome></BannerHome>
      </Text>
    </SafeAreaView>
  );
};

export default HomeTab;

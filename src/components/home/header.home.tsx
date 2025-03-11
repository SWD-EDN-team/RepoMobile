import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { APP_COLOR } from "@/utils/constant";
import avt from "@/assets/homepage/avt.png";
import Entypo from "@expo/vector-icons/Entypo";

const { width } = Dimensions.get("window");

const HeaderHome = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Address:</Text>
      <View style={styles.container}>
        <Entypo
          style={{ marginRight: 2 }}
          name="location-pin"
          size={24}
          color={APP_COLOR.ORANGE}
        />
        <Text style={styles.locationText}>
          Khu đô thị công nghệ FPT Đà Nẵng
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    textAlign: "left",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "bold",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    width: "100%",
  },
  icon: {
    marginLeft: 0,
  },
  locationText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default HeaderHome;

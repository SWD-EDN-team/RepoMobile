import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import avt from "@/assets/homepage/avt.png";
import { APP_COLOR } from "@/utils/constant";
import Entypo from "@expo/vector-icons/Entypo";
import BannerHome from "@/components/home/banner.home";
import FlatlistHome from "@/components/home/flatlist.home";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 0.3,
  },
  listContainer: {
    flex: 0.6,
  },
  searchSection: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  searchIcon: {
    // fontSize: 24,
    color: "black",
    opacity: 0.8,
    marginHorizontal: 10,
    position: "absolute",
  },
});
const HomeTab = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Entypo
          name="menu"
          size={24}
          color="black"
          onPress={() => router.push("/(drawer)")}
        />

        <View style={styles.headerText}>
          <Text style={{ color: APP_COLOR.GREY, fontWeight: "bold" }}>
            Deliver to
          </Text>
          <Text style={{ color: APP_COLOR.ORANGE, fontWeight: 600 }}>
            4102 Pretty View 
          </Text>
        </View>
        <ImageBackground
          style={{
            flex: 0.2,
            height: 60,
            borderRadius: 60,
            overflow: "hidden",
          }}
          source={avt}
        ></ImageBackground>
      </View>
      <View style={styles.bodyContainer}>
        <BannerHome></BannerHome>
      </View>
      <View style={styles.searchSection}>
        <FontAwesome
          style={styles.searchIcon}
          name="search"
          size={20}
          color="black"
        />
        <TextInput placeholder="Search..."></TextInput>
      </View>
      <View style={styles.listContainer}>
        <FlatlistHome></FlatlistHome>
      </View>
    </SafeAreaView>
  );
};

export default HomeTab;

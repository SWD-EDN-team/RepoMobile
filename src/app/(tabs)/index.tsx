import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import avt from "@/assets/homepage/avt.png";
import { APP_COLOR } from "@/utils/constant";
import BannerHome from "@/components/home/banner.home";
import FlatListHome from "@/components/home/flatlist.home";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HeaderHome from "@/components/home/header.home";
import { EvilIcons } from "@expo/vector-icons";
import SearchHome from "@/components/home/search.home";
import { useCurrentTheme } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { printAsyncStorage } from "../../utils/api";

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
    display: "flex",
    alignItems: "center",
    backgroundColor: APP_COLOR.GREY,
    gap: 5,
    flexDirection: "row",
    margin: 5,
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
const HomeTab = () => {
  const handleClick = async () => {
    printAsyncStorage();
  };
  useEffect(() => {
    const test = async () => {
      await AsyncStorage.setItem("anhquan", "anhquan-value");
      await AsyncStorage.setItem("access_token", "anhquan-token");
    };
    test();
  }, []);

  const navigation = useNavigation();
  const { theme, setTheme } = useCurrentTheme();
  return (
    <>
      <Button onPress={handleClick} title="check AsyncStorage"></Button>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderHome></HeaderHome>
        </View>
        <View style={styles.bodyContainer}>
          <BannerHome></BannerHome>
        </View>
        <View>
          <SearchHome></SearchHome>
        </View>
        <View style={styles.listContainer}>
          <FlatListHome></FlatListHome>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeTab;

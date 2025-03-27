import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { APP_COLOR } from "@/utils/constant";
import BannerHome from "@/components/home/banner.home";
import FlatListHome from "@/components/home/flatlist.home";
import { useNavigation } from "@react-navigation/native";
import HeaderHome from "@/components/home/header.home";
import SearchHome from "@/components/home/search.home";
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { printAsyncStorage } from "../../utils/api";
import { dataPage } from "@/data/page";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: 4,
  },
  headerContainer: {
    backgroundColor: "white",
    zIndex: 100,
    padding: 6,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    // paddingVertical: 6,
  },
  itemContainer: {
    height: 60,
    width: 86,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 8,
    marginTop: 3,
    fontWeight: "500",
  },
});

const HomeTab = () => {
  interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
  }

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.headerContainer}>
              <HeaderHome />
              <SearchHome />
            </View>
            <BannerHome />
            <View style={styles.productList}>
              <FlatList
                style={{ marginBottom: 6 }}
                data={dataPage.filter((_, index) => index % 2 === 0)}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
              />
              <FlatList
                data={dataPage.filter((_, index) => index % 2 !== 0)}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
              />
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={{ height: "100%" }}>
            <FlatListHome />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HomeTab;

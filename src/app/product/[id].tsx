import { ActivityIndicator, Text, View } from "react-native";
import RMain from "@/components/example/restaurant/main";
import SectionListBasic from "@/components/example/section.list.basic";
import SectionListScroll from "@/components/example/section.list.scroll";
import SectionListLibrary from "@/components/example/section.list.library";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getProductDetail } from "@/utils/api";

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [infoProduct, setInfoProduct] = useState<any>();
  console.log("id product:",id);
    useEffect(() => {
      const fetProduct = async () => {
        try {
          const res = await getProductDetail(id.toString());
          if (res && res.data) {
            setInfoProduct(res.data);
          } else {
            setError("No products found.");
          }
        } catch (err) {
          console.error("Fetch error:", err);
          setError("Failed to load products.");
        } finally {
          setLoading(false);
        }
      };
      fetProduct();
    }, []);
    console.log("productDetial...", infoProduct);
  
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : (
      <RMain infoProduct={infoProduct}  />
      //{/* <SectionListBasic></SectionListBasic> */}
      //{/* <SectionListScroll></SectionListScroll> */}
      //{/* <SafeAreaView> */}
      //{/* <SectionListLibrary></SectionListLibrary> */}
      //{/* </SafeAreaView> */}
    )}
    </View>
  );
};

export default ProductPage;

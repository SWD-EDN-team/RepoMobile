import { Text, View } from "react-native";
import RMain from "@/components/example/restaurant/main";
import SectionListBasic from "@/components/example/section.list.basic";
import SectionListScroll from "@/components/example/section.list.scroll";
import SectionListLibrary from "@/components/example/section.list.library";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [infoProduct, setInfoProduct] = useState<any>({});
  return (
    <View style={{ flex: 1 }}>
      <RMain infoProduct={infoProduct} />
      {/* <SectionListBasic></SectionListBasic> */}
      {/* <SectionListScroll></SectionListScroll> */}
      {/* <SafeAreaView> */}
      {/* <SectionListLibrary></SectionListLibrary> */}
      {/* </SafeAreaView> */}
    </View>
  );
};

export default ProductPage;

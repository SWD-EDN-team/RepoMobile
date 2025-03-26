import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCurrentApp } from "@/context/app.context";

const AnimatedMaterialIcons = Animated.createAnimatedComponent(MaterialIcons);
const { height: sHeight, width: sWidth } = Dimensions.get("window");

const styles = StyleSheet.create({});
interface IProps {
  headerHeight: number;
  imageHeight: number;
  id:string;

  animatedBackgroundStyle: any;
  animatedArrowColorStyle: any;
  animatedStickyHeaderStyle: any;
  animatedHeartIconStyle: any;
}

const StickyHeader = (props: IProps) => {
    const { setAppState } = useCurrentApp();
  console.log("setAppState",setAppState);
  
  const insets = useSafeAreaInsets();
  const {
    id,
    headerHeight,
    imageHeight,
    animatedBackgroundStyle,
    animatedArrowColorStyle,
    animatedStickyHeaderStyle,
    animatedHeartIconStyle,
  } = props;

  const handlerAddWishList = async (id: string)=>{
    try{
    const token = await AsyncStorage.getItem("access_token");

    if (!token) {
      alert("Vui lòng đăng nhập!");
      return;
    }

    const response = await axios.post(
      "https://repo-node-5.onrender.com/api/v1/wishlist",
      { product_id: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Thêm vào wishlist thành công:", response.data);
    alert("Đã thêm sản phẩm vào danh sách yêu thích!");
    } catch (error:any) {
      console.error("Chi tiết lỗi:", error.response); // In lỗi ra console
      alert("Thêm sản phẩm thất bại: " + (error.response?.data?.message || error.message));
    }

  }

  // nút Back và like/dislike gộp vào component này, vì nó có zIndex cao nhất => có thể pressabled
  return (
    <>
      <View
        style={{
          zIndex: 11,
          paddingTop: insets.top + 10,
          paddingHorizontal: 10,
          flexDirection: "row",
          gap: 5,
          height: headerHeight,
          position: "absolute",
          width: sWidth,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed === true ? 0.5 : 1 },
            { alignSelf: "flex-start" },
          ]}
          onPress={() => router.back()}
        >
          <Animated.View
            style={[
              animatedBackgroundStyle,
              {
                height: 30,
                width: 30,
                borderRadius: 30 / 2,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <AnimatedMaterialIcons
              name="arrow-back"
              size={24}
              style={animatedArrowColorStyle}
            />
          </Animated.View>
        </Pressable>
        <Animated.View style={[{ flex: 1 }, animatedStickyHeaderStyle]}>
          <TextInput
            placeholder={"Tìm sản phẩm..."}
            style={{
              borderWidth: 1,
              borderColor: APP_COLOR.GREY,
              width: "100%",
              borderRadius: 3,
              paddingHorizontal: 10,
            }}
          />
        </Animated.View>
      </View>
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            height: headerHeight,
            backgroundColor: "white",
          },
          animatedStickyHeaderStyle,
        ]}
      />

      {/* like/dislike trong product */}
      <Animated.View
        style={[
          {
            position: "absolute",
            top: imageHeight + 80,
            right: 10,
            zIndex: 9,
          },
          animatedHeartIconStyle,
        ]}
      >
        {/* <MaterialIcons name="favorite" size={20} color="black" /> */}
        <MaterialIcons
          onPress={() => handlerAddWishList(id)}
          name="favorite-outline"
          size={20}
          color={APP_COLOR.GREY}
        />
      </Animated.View>
    </>
  );
};

export default StickyHeader;
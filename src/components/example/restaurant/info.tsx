import { APP_COLOR } from "@/utils/constant";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text } from "react-native";

interface IProps {
  infoHeight: number;
}
const Info = (props: IProps) => {
  const { infoHeight } = props;

  return (
    <View
      style={{
        height: infoHeight,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ height: 60, margin: 10 }}>
        <Text style={{ lineHeight: 30 }} numberOfLines={2} ellipsizeMode="tail">
          <View>
            <Text
              style={{
                color: "white",
                backgroundColor: APP_COLOR.ORANGE,
                padding: 0,
                margin: 0,
              }}
            >{`  Yêu thích  `}</Text>
          </View>
          <Text>{` `}</Text>
          <Ionicons name="shirt-outline" size={20} color="orange" />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            {" "}
            Thời Trang - Quần Áo Nam Nữ
          </Text>
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 10, flexDirection: "row" }}>
          <View
            style={{ gap: 3, flexDirection: "row", alignSelf: "flex-start" }}
          >
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
          </View>
          <Text>5.0 (999+ Đánh Giá) </Text>
        </View>
      </View>
      <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>

      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View style={{ marginHorizontal: 10, marginVertical: 5, gap: 10 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,192,203,0.3)",
              }}
            >
              <AntDesign
                name="shoppingcart"
                size={25}
                color={APP_COLOR.ORANGE}
              />
            </View>
            <View>
              <Text>Miễn phí giao hàng cho đơn từ 300k</Text>
            </View>
          </View>
          <View style={{ gap: 5 }}>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <AntDesign name="tags" size={12} color={APP_COLOR.ORANGE} />
              <Text>Giảm 10% cho đơn từ 500k</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <AntDesign name="tags" size={12} color={APP_COLOR.ORANGE} />
              <Text>Giảm 15% khi mua từ 2 sản phẩm</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
      </View>
    </View>
  );
};

export default Info;
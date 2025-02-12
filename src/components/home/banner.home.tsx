import * as React from "react";
import { Dimensions, View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const data = [
  require("@/assets/homepage/Sale Banner Photo.png"),
  require("@/assets/homepage/bn1.jpg"),
  require("@/assets/homepage/bn2.jpg"),
  require("@/assets/homepage/bn3.jpg"),
  require("@/assets/homepage/Sale Banner Photo.png"),
];

const width = Dimensions.get("window").width;

const BannerHome = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 3}
        data={data}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Image
              source={item}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
            />
          </View>
        )}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default BannerHome;

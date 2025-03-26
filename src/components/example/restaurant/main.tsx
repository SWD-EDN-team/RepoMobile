import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SectionList,
  ViewToken,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolation,
  interpolateColor,
} from "react-native-reanimated";
import Info from "./info";
// import demo from "@/assets/product/item_product.jpg";
import { APP_COLOR } from "@/utils/constant";
import StickyHeader from "./sticky.header";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import { getProductCategory } from "@/utils/api";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const { height: sHeight, width: sWidth } = Dimensions.get("window");

const HEADER_HEIGHT = 120;
const IMAGE_HEIGHT = 220;
const INFO_HEIGHT = 250;
const SLIDE_MENU_HEIGHT = 50; // cuộn sang ngang

interface IProps {
  infoProduct: any;
}

const RMain = (props: IProps) => {
  const { infoProduct } = props;

  const scrollY = useSharedValue(0);

  const sectionListRef = useRef<SectionList>(null);
  const flatListRef = useRef<FlatList>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | string>(0);
  const blockUpdateRef = useRef<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    const fetProduct = async () => {
      try {
        const res = await getProductCategory();
        if (res && res.data) {
          setProducts(res.data.data);
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
  console.log("ppppppppppppppppppp", products);

  const sections = Array.isArray(products)
    ? products.map((category: { category: any; products: any }) => ({
        title: category.category, // Tiêu đề danh mục
        data: category.products, // Danh sách sản phẩm
      }))
    : [];

  // lấy ra cuộn chuột dc bao nhiêu rồi
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedStickyHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 100],
      [0, 1],
      Extrapolation.CLAMP
    );
    const pointerEvents = opacity === 0 ? "none" : "auto";

    return {
      opacity,
      pointerEvents, // on . off input
    };
  });

  const animatedMenuStyle = useAnimatedStyle(() => {
    const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;
    const translateY = interpolate(
      scrollY.value,
      [0, range], // Define scroll range
      [0, -range - 2], //2px menu border
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
      position: "absolute",
      top: IMAGE_HEIGHT + INFO_HEIGHT,
      zIndex: 2,
      width: "100%",
      backgroundColor: "white",
    };
  });

  const animatedInfoStyle = useAnimatedStyle(() => {
    const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;

    const translateY = interpolate(
      scrollY.value,
      [0, range], // Define scroll range
      [0, -range],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
      position: "absolute",
      top: IMAGE_HEIGHT,
      zIndex: 1,
      width: "100%",
    };
  });

  const animatedHeartIconStyle = useAnimatedStyle(() => {
    const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;

    const translateY = interpolate(
      scrollY.value,
      [0, range], // Define scroll range
      [0, -range],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
    };
  });

  // Animated styles for background
  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 100],
        ["rgba(0,0,0,0.3)", "transparent"]
      ),
    };
  });

  // Animate arrow color
  const animatedArrowColorStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [0, 100],
        ["white", APP_COLOR.ORANGE] // Arrow color range
      ),
    };
  });

  // const DATA = [
  //   {
  //     title: "Áo Nam",
  //     data: ["Áo thun", "Áo sơ mi", "Áo khoác"],
  //     index: 0,
  //     key: "menu-0",
  //   },
  //   {
  //     title: "Áo Nữ",
  //     data: ["Áo croptop", "Áo sơ mi", "Áo khoác"],
  //     index: 1,
  //     key: "menu-1",
  //   },
  //   {
  //     title: "Quần Nam",
  //     data: ["Quần jeans", "Quần kaki", "Quần short"],
  //     index: 2,
  //     key: "menu-2",
  //   },
  //   {
  //     title: "Quần Nữ",
  //     data: ["Quần jeans", "Quần legging", "Chân váy"],
  //     index: 3,
  //     key: "menu-3",
  //   },
  //   {
  //     title: "Phụ kiện",
  //     data: ["Nón", "Thắt lưng", "Balo"],
  //     index: 4,
  //     key: "menu-4",
  //   },
  //   {
  //     title: "Giày Dép",
  //     data: ["Giày thể thao", "Giày cao gót", "Dép sandal"],
  //     index: 5,
  //     key: "menu-5",
  //   },
  //   {
  //     title: "Túi xách",
  //     data: ["Túi tote", "Túi đeo chéo", "Balo"],
  //     index: 6,
  //     key: "menu-6",
  //   },
  //   {
  //     title: "Đồ trẻ em",
  //     data: ["Áo bé trai", "Áo bé gái", "Quần bé trai"],
  //     index: 7,
  //     key: "menu-7",
  //   },
  //   {
  //     title: "Đồ thể thao",
  //     data: ["Áo thể thao", "Quần thể thao", "Giày thể thao"],
  //     index: 8,
  //     key: "menu-8",
  //   },
  // ];

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0 && !blockUpdateRef.current) {
        const visibleSectionIndex = viewableItems[0].section.index;
        setActiveMenuIndex(visibleSectionIndex);
        flatListRef.current?.scrollToIndex({
          index: visibleSectionIndex,
          animated: true,
        });
      }
    }
  ).current;

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : (
        <>
          <StickyHeader
            id={infoProduct._id}
            headerHeight={HEADER_HEIGHT}
            imageHeight={IMAGE_HEIGHT}
            animatedBackgroundStyle={animatedBackgroundStyle}
            animatedArrowColorStyle={animatedArrowColorStyle}
            animatedStickyHeaderStyle={animatedStickyHeaderStyle}
            animatedHeartIconStyle={animatedHeartIconStyle}
          />
          <View style={styles.header}>
            <Image
              source={{
                uri: `https://repo-node-5.onrender.com${infoProduct.image[0]}`,
              }}
              alt="Product detail"
              style={styles.headerImage}
            />
          </View>
          <Animated.View style={[animatedInfoStyle]}>
            <Info infoHeight={INFO_HEIGHT} data={infoProduct} />
          </Animated.View>

          {/* // slide menu */}
          <Animated.FlatList
            ref={flatListRef}
            horizontal
            data={products}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  blockUpdateRef.current = true;
                  setActiveMenuIndex(index);
                  sectionListRef.current?.scrollToLocation({
                    sectionIndex: item.categoryId,
                    itemIndex: 0,
                    viewOffset: HEADER_HEIGHT + SLIDE_MENU_HEIGHT,
                  });
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 7,
                    height: SLIDE_MENU_HEIGHT,
                    justifyContent: "center",
                    borderBottomColor:
                      item.categoryId === activeMenuIndex
                        ? APP_COLOR.ORANGE
                        : APP_COLOR.GREY,
                    borderBottomWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      color:
                        item.index === activeMenuIndex
                          ? APP_COLOR.ORANGE
                          : "black",
                      marginHorizontal: 5,
                    }}
                  >
                    {item.category}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            style={[animatedMenuStyle]}
          />

          {/* // selection list */}
          <AnimatedSectionList
            ref={sectionListRef as any}
            style={{ zIndex: 1 }}
            onScroll={onScroll}
            stickySectionHeadersEnabled={false}
            contentContainerStyle={{
              paddingTop: IMAGE_HEIGHT + INFO_HEIGHT + SLIDE_MENU_HEIGHT - 2,
              paddingBottom: 30,
            }}
            sections={sections}
            renderItem={({ item, index }: { item: any; index: any }) => (
              <TouchableOpacity>
                <View 
                  style={{ paddingHorizontal: 10, backgroundColor: "white" }}
                >
                  <View
                    style={{
                      backgroundColor: "pink",
                      height: 50,
                      justifyContent: "center",
                      paddingLeft: 10,
                    }}
                  >
                    <Text  onPress={() =>{
                router.navigate({
                  pathname: "/product/[id]",
                  params: { id: item._id },
                })}
              }>
                      {item.product_name} - {item.price} VND
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section }: { section: any }) => (
              <View
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {section.title}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#ccc",
                    marginVertical: 5,
                  }}
                />
              </View>
            )}
            viewabilityConfig={{
              viewAreaCoveragePercentThreshold: 1,
              waitForInteraction: true,
            }}
            onViewableItemsChanged={onViewableItemsChanged}
            onMomentumScrollEnd={() => (blockUpdateRef.current = false)}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: APP_COLOR.ORANGE,
    marginHorizontal: 10,
  },
  header: {
    width: sWidth,
    height: IMAGE_HEIGHT,
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 1,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default RMain;

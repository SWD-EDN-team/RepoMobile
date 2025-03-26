import { APP_COLOR } from "@/utils/constant";
import { useRef, useState } from "react";
import {
  Button,
  FlatList,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import debounce from "debounce";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
const SectionListScroll = () => {
  const sectionListRef = useRef<SectionList>(null);
  const flatListRef = useRef<FlatList>(null);

  const [activeMenuIndex, setActiveMenuIndex] = useState<number | string>(0);

  const DATA = [
    {
      title: "Áo Nam",
      data: ["Áo thun", "Áo sơ mi", "Áo khoác"],
      index: 0,
      key: "menu-0",
    },
    {
      title: "Áo Nữ",
      data: ["Áo croptop", "Áo sơ mi", "Áo khoác"],
      index: 1,
      key: "menu-1",
    },
    {
      title: "Quần Nam",
      data: ["Quần jeans", "Quần kaki", "Quần short"],
      index: 2,
      key: "menu-2",
    },
    {
      title: "Quần Nữ",
      data: ["Quần jeans", "Quần legging", "Chân váy"],
      index: 3,
      key: "menu-3",
    },
    {
      title: "Phụ kiện",
      data: ["Nón", "Thắt lưng", "Balo"],
      index: 4,
      key: "menu-4",
    },
    {
      title: "Giày Dép",
      data: ["Giày thể thao", "Giày cao gót", "Dép sandal"],
      index: 5,
      key: "menu-5",
    },
    {
      title: "Túi xách",
      data: ["Túi tote", "Túi đeo chéo", "Balo"],
      index: 6,
      key: "menu-6",
    },
    {
      title: "Đồ trẻ em",
      data: ["Áo bé trai", "Áo bé gái", "Quần bé trai"],
      index: 7,
      key: "menu-7",
    },
    {
      title: "Đồ thể thao",
      data: ["Áo thể thao", "Quần thể thao", "Giày thể thao"],
      index: 8,
      key: "menu-8",
    },
  ];

  const handleScrollToLocation = () => {
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 1,
      itemIndex: 2,
    });
  };

  const onViewableItemsChanged = useRef(
    debounce(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        const visibleSectionIndex = viewableItems[0].section.index;
        setActiveMenuIndex(visibleSectionIndex);
        flatListRef.current?.scrollToIndex({
          index: visibleSectionIndex,
          animated: true,
        });
      }
    }, 50)
  ).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 10, paddingBottom: 100 }}>
        <View>
          <Button title="Test Scroll" onPress={handleScrollToLocation} />
        </View>
        <FlatList
          ref={flatListRef}
          data={DATA}
          horizontal
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                sectionListRef.current?.scrollToLocation({
                  sectionIndex: item.index,
                  itemIndex: 0,
                });
              }}
            >
              <View
                style={{
                  borderBottomColor: APP_COLOR.ORANGE,
                  borderBottomWidth: item.index === activeMenuIndex ? 2 : 0,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#007AFF",
                    marginHorizontal: 5,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <SectionList
          stickySectionHeadersEnabled={true}
          ref={sectionListRef}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            // itemVisiblePercentThreshold: 50, //means if 50% of the item is visible
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 50,
          }}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.title}>
                {item} - {index + 1}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section: { title, index } }) => (
            <Text style={styles.header}>
              {title} - {index} - 0{" "}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SectionListScroll;

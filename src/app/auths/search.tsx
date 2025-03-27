import { dataPage } from "@/data/page";
import { APP_COLOR } from "@/utils/constant";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, View, Text, Image, TextInput, FlatList } from "react-native";

const SearchPage = () => {
  const [searchText, setSearchText] = useState(""); // Lưu từ khóa tìm kiếm
  const [searchItem, setSearchItem] = useState<any>(dataPage); // Danh sách sản phẩm đã lọc

  // Xử lý khi nhập vào ô tìm kiếm
  const handleSearch = (text: string) => {
    setSearchText(text); // Cập nhật từ khóa
    if (text.trim() === "") {
      setSearchItem(dataPage); // Nếu rỗng, hiển thị toàn bộ
    } else {
      const filtered = dataPage.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setSearchItem(filtered);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center", padding: 10 }}>
        <MaterialIcons onPress={() => router.back()} name="arrow-back" color={APP_COLOR.ORANGE} size={24} />
        <TextInput
          placeholder="Tìm kiếm sản phẩm"
          value={searchText}
          onChangeText={handleSearch} // Gọi hàm tìm kiếm khi nhập
          style={{
            flex: 1,
            backgroundColor: "#eee",
            paddingVertical: 3,
            paddingHorizontal: 10,
            borderRadius: 3,
          }}
        />
      </View>

      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 10, gap: 10 }}>
          <Text>Phổ Biến</Text>
          <FlatList
            data={searchItem}
            numColumns={2}
            renderItem={({ item, index }) => {
              const isHighlighted = searchText && item.title.toLowerCase().includes(searchText.toLowerCase());

              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    flex: 1,
                    backgroundColor: isHighlighted ? "#fffae6" : "white", // Đổi màu nền nếu khớp
                    borderColor: "#eee",
                    borderWidth: index === 0 || index === 1 ? 1 : 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: index % 2 === 1 ? 1 : 0,
                  }}
                >
                  <Text>{item.title}</Text>
                  <Image source={typeof item.image === "string" ? { uri: item.image } : item.image} style={{ width: 50, height: 50 }} />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;

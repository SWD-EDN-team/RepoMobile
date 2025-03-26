import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdownmenu = () => {
  const [openProvince, setOpenProvince] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [provinces, setProvinces] = useState([
    { label: "Đà Nẵng", value: "danang" },
    { label: "Hà Nội", value: "hanoi" },
    { label: "TP. Hồ Chí Minh", value: "hochiminh" },
  ]);

  const [openDistrict, setOpenDistrict] = useState(false);
  const [selectedDistricts, setSelectedDistricts] = useState<string | null>(
    null
  );
  const [districts, setDistricts] = useState<
    { label: string; value: string }[]
  >([]);

  const districtData: Record<string, { label: string; value: string }[]> = {
    danang: [
      { label: "Hải Châu", value: "haichau" },
      { label: "Thanh Khê", value: "thanhkhe" },
      { label: "Sơn Trà", value: "sontra" },
      { label: "Ngũ Hành Sơn", value: "nguhanhson" },
      { label: "Liên Chiểu", value: "lienchieu" },
      { label: "Cẩm Lệ", value: "camle" },
      { label: "Hòa Vang", value: "hoavang" },
    ],
    hanoi: [
      { label: "Ba Đình", value: "badinh" },
      { label: "Hoàn Kiếm", value: "hoankiem" },
      { label: "Hai Bà Trưng", value: "haibatrung" },
    ],
    hochiminh: [
      { label: "Quận 1", value: "quan1" },
      { label: "Quận 3", value: "quan3" },
      { label: "Bình Thạnh", value: "binhthanh" },
    ],
  };

  // Cập nhật danh sách Quận/Huyện khi chọn Tỉnh/Thành phố
  const updateDistricts = (selected: string | null) => {
    if (selected && districtData[selected]) {
      setDistricts(districtData[selected]);
    } else {
      setDistricts([]);
    }
    setSelectedDistricts(null); // Reset lựa chọn quận huyện
  };

  return (
    <View>
      <Text style={styles.label}>Provinces</Text>
      <DropDownPicker
        open={openProvince}
        setOpen={setOpenProvince}
        value={selectedProvince}
        setValue={setSelectedProvince}
        items={provinces}
        placeholder="Select province"
        zIndex={3000}
        onChangeValue={(val) => updateDistricts(val)}
        style={styles.input}
      />

      {/* Dropdown chọn Quận/Huyện */}
      <Text style={styles.label}>District</Text>
      <DropDownPicker
        style={[styles.input]}
        open={openDistrict}
        setOpen={setOpenDistrict}
        value={selectedDistricts}
        setValue={setSelectedDistricts}
        items={districts}
        placeholder="Select district"
        zIndex={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  input: {
    height: 80,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
    marginBottom: 50,
  },
  inputError: {
    borderColor: "red",
  },
});

export default Dropdownmenu;

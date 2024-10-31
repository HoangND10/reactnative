import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"; // Import StyleSheet và View

const Lto2 = () => {
  const [selectedGender, setSelectedGender] = useState("male");
  const CustomCheckBox = ({ isSelected, onPress, title }) => {
    return (
      <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.checkboxText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Thống kê</Text>
      <View style={styles.ttk4}>
        <View style={styles.ttk3}>
          <Text style={{ fontSize: 14 }}>Tổng LTO</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>250</Text>
        </View>
        <View style={styles.ttk3}>
          <Text style={{ fontSize: 14 }}>Tổng người chơi</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>478</Text>
        </View>
        <View style={styles.ttk3}>
          <Text style={{ fontSize: 14 }}>Tổng lượt caddie phục vụ</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>478</Text>
        </View>
        <View style={styles.ttk3}>
          <Text style={{ fontSize: 14 }}>Tổng thời gian nhanh/ chậm</Text>
          <Text style={{ color: "#FA0909", fontSize: 14 }}>-03:21:00</Text>
        </View>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Biểu đồ</Text>
      <View style={styles.container2}>
        <Text style={{ color: "grey", fontSize: 14 }}>Xem theo:</Text>
        <View style={styles.cb}>
          <CustomCheckBox
            title="LTO"
            isSelected={selectedGender === "male"}
            onPress={() => setSelectedGender("male")}
          />
          <CustomCheckBox
            title="Số người chơi"
            isSelected={selectedGender === "female"}
            onPress={() => setSelectedGender("female")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    marginTop: 15,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ttk3: {
    flexDirection: "row", // Căn theo chiều ngang
    justifyContent: "space-between", // Đẩy hai bảng sang hai bên
    borderBottomWidth: 1, // Độ dày của đường gạch chân
    borderBottomColor: "#B9B9B9", // Màu sắc của đường gạch chân
    borderStyle: "dashed",
    paddingBottom: 10, // Khoảng cách dưới cùng của phần tử
    marginBottom: 10, // Khoảng cách giữa các mục ttk3
  },
  ttk4: {
    width: "80%",
    marginLeft: "10%",
    marginTop: 15,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginRight: 40,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 12, // Để tạo hình tròn
    borderWidth: 1,
    borderColor: "#676767",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxSelected: {
    borderColor: "#30B153", // Màu primary
  },
  innerCircle: {
    padding: 6.7,
    borderRadius: 50,
    backgroundColor: "#30B153", // Màu primary
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
  },
  cb: {
    flexDirection: "row",
    marginLeft: 40,
  },
});

export default Lto2;

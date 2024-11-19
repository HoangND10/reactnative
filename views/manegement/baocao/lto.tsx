import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native"; // Import StyleSheet và View
import BarChart from "./BarChart";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const Lto2 = () => {
  const datatl = [
    { label: "Mon 01/02", value: 10 },
    { label: "Tue 02/02", value: 20 },
    { label: "Wed 03/02", value: 30 },
    { label: "Thu 04/02", value: 40 },
    { label: "Fri 05/02", value: 50 },
    { label: "Sat 06/02", value: 60 },
    { label: "Sun 07/02", value: 70 },
    { label: "Mon 08/02", value: 80 },
    { label: "Tue 09/02", value: 90 },
    { label: "Wed 10/02", value: 100 },
    { label: "Thu 11/02", value: 90 },
    { label: "Fri 12/02", value: 80 },
    { label: "Sat 13/02", value: 70 },
    { label: "Sun 14/02", value: 60 },
    { label: "Mon 15/02", value: 50 },
    { label: "Tue16/02", value: 40 },
    { label: "Wed 17/02", value: 30 },
    { label: "Thu 18/02", value: 20 },
    { label: "Fri 19/02", value: 10 },
    { label: "Sat 20/02", value: 110 },
  ];
  const data = [
    { label: "01", value: 10 },
    { label: "02", value: 20 },
    { label: "03", value: 30 },
    { label: "04", value: 40 },
    { label: "05", value: 50 },
    { label: "06", value: 60 },
    { label: "07", value: 55 },
  ];
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
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {isTablet ? (
          <>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Thống kê</Text>
            <View style={styles.ttk4tl}>
              <View style={styles.ttk3tl}>
                <Text style={{ fontSize: 14 }}>Tổng LTO</Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>250</Text>
              </View>
              <View style={styles.ttk3tl}>
                <Text style={{ fontSize: 14 }}>Tổng người chơi</Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>478</Text>
              </View>
              <View style={styles.ttk3tl}>
                <Text style={{ fontSize: 14 }}>Tổng lượt caddie phục vụ</Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>478</Text>
              </View>
              <View style={styles.ttk3tl}>
                <Text style={{ fontSize: 14 }}>Tổng thời gian nhanh/ chậm</Text>
                <Text style={{ color: "#FA0909", fontSize: 14 }}>
                  -03:21:00
                </Text>
              </View>
            </View>
          </>
        ) : (
          <>
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
                <Text
                  style={{
                    fontSize: 14,
                    flex: 1, // Để chữ có thể chiếm hết không gian còn lại
                    maxWidth: "70%", // Giới hạn 70% chiều ngang
                    flexWrap: "wrap", // Cho phép xuống dòng
                    overflow: "hidden", // Ngăn tràn nội dung
                    textAlign: "left", // Căn trái
                  }}
                >
                  Tổng thời gian nhanh/ chậm
                </Text>
                <Text style={{ color: "#FA0909", fontSize: 14 }}>
                  -03:21:00
                </Text>
              </View>
            </View>
          </>
        )}

        {isTablet ? (
          <>
            <View style={styles.rowContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Biểu đồ</Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 14,
                  marginLeft: "63%",
                  marginTop: 3,
                }}
              >
                Xem theo:
              </Text>
              <View style={styles.container2tl}>
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
          </>
        ) : (
          <>
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
          </>
        )}

        {/* biểu đồ */}
        <View style={styles.container3}>
          <BarChart data={isTablet ? datatl : data} round={100} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Cho phép nội dung cuộn nếu vượt quá màn hình
    paddingBottom: 20,
  },
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
  rowContainer: {
    flexDirection: "row", // Đặt các phần tử trong dòng ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    justifyContent: "space-between",
  },

  container2tl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "flex-end",
  },
  container3: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 35,
    flex: 1,
  },
  ttk3: {
    flexDirection: "row", // Căn theo chiều ngang
    justifyContent: "space-between", // Đẩy hai phần tử sang hai bên
    alignItems: "flex-start", // Căn các phần tử con ở đầu
    borderBottomWidth: 1, // Độ dày của đường gạch chân
    borderBottomColor: "#B9B9B9", // Màu sắc của đường gạch chân
    borderStyle: "dashed",
    paddingBottom: 10, // Khoảng cách dưới cùng của phần tử
    marginBottom: 10, // Khoảng cách giữa các mục ttk3
    flexWrap: "wrap", // Cho phép xuống dòng khi không đủ không gian
    width: "100%", // Đảm bảo chiếm toàn bộ chiều ngang cha
  },

  ttk3tl: {
    flexDirection: "row", // Căn theo chiều ngang
    justifyContent: "space-between", // Đẩy hai bảng sang hai bên
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignContent: "center",
    width: "23%",
  },
  ttk4: {
    width: "80%",
    marginLeft: "10%",
    marginTop: 15,
    marginBottom: 15,
  },
  ttk4tl: {
    // // width: "24%",
    // marginLeft: "10%",
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
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

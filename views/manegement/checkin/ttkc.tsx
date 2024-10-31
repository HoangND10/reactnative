import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/Feather";

const Ttkc = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* họ tên   */}
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          Họ tên <Text style={{ color: "red" }}>*</Text>
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ fontSize: 16 }}
            placeholder="Nhập họ tên"
            placeholderTextColor="#999" // Màu cho placeholder
          />
        </View>
        {/* số điện thoại */}
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Số điện thoại</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ fontSize: 16 }}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#999"
          />
        </View>
        {/* chọn xe */}
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Chọn xe</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ fontSize: 16 }}
            placeholder="Chọn xe"
            placeholderTextColor="#999"
          />
          <Icon name="chevron-right" size={24} />
        </View>
        {/* ngôn ngữ xe */}
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Ngôn ngữ xe</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ fontSize: 16 }}
            placeholder="Chọn ngôn ngữ xe"
            placeholderTextColor="#999"
          />
          <Icon name="chevron-right" size={24} />
        </View>
        {/* bagtag | key tủ đồ */}
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Bagtag <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={{ fontSize: 16 }}
                placeholder="Nhập bagtag"
                placeholderTextColor="#999" // Màu cho placeholder
              />
            </View>
          </View>
          <View style={styles.container3}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Key tủ đồ <Text style={{ color: "red" }}>*</Text>
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={{ fontSize: 16 }}
                placeholder="Nhập key tủ đồ"
                placeholderTextColor="#999" // Màu cho placeholder
              />
            </View>
          </View>
        </View>
        {/* ghi chú */}
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Ghi chú</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Ghi chú"
          placeholderTextColor="#999"
          multiline={true} // Cho phép nhập nhiều dòng
          numberOfLines={4} // Gợi ý số dòng ban đầu (có thể thay đổi)
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  inputContainer: {
    width: "100%", // Bạn có thể điều chỉnh kích thước theo yêu cầu
    marginVertical: 15, // Khoảng cách trên dưới với các thành phần khác
    backgroundColor: "#F2F2F2", // Màu nền xám
    padding: 15, // Khoảng cách giữa văn bản bên trong với biên của TextInput
    borderRadius: 5, // Bo tròn góc (tuỳ chọn)
    fontSize: 16, // Cỡ chữ
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container3: {
    width: 165,
  },
  textArea: {
    marginTop: 15,
    backgroundColor: "#F2F2F2",
    padding: 10, // Khoảng cách giữa văn bản và viền
    borderRadius: 5, // Bo tròn góc (tuỳ chọn)
    fontSize: 16,
    textAlignVertical: "top", // Đảm bảo nội dung căn từ phía trên cùng
    height: 100, // Chiều cao tùy chỉnh để hiển thị như một textarea
  },
});

export default Ttkc;

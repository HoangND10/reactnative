import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/MaterialIcons";

const TaoLTO2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  // State để xử lý việc mở rộng nội dung
  const [expanded, setExpanded] = useState(false);

  // Hàm toggle để mở rộng hoặc thu gọn nội dung
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const handlePress = () => {
    setIsChecked(!isChecked); // Thay đổi trạng thái khi nhấn vào ô tích
  };
  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <View style={styles.container2}>
          <View style={styles.cnc4}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>2568</Text>
            <TouchableOpacity style={styles.closeIconContainer}>
              <Icon name="x" size={14} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.cnc4}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>2568</Text>
            <TouchableOpacity style={styles.closeIconContainer}>
              <Icon name="x" size={14} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.cnc4}>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>2568</Text>
            <TouchableOpacity style={styles.closeIconContainer}>
              <Icon name="x" size={14} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tt14}>
          <View style={styles.cnc5}>
            <Icon3 name="qr-code-scanner" size={24} />
          </View>
        </View>
      </View>
      <Text style={styles.name2}>Chọn Hố bắt đầu:</Text>
      <View style={styles.container4}>
        <ScrollView contentContainerStyle={styles.scv}>
          <View style={styles.table}>
            <View>
              <View style={styles.table2}>
                <View style={styles.leftContent}>
                  {/* Bọc phần tên trong TouchableOpacity để có thể bấm */}
                  <TouchableOpacity onPress={toggleExpanded}>
                    <Icon
                      name={expanded ? "chevron-up" : "chevron-down"}
                      size={24}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.name}>001</Text>
                  </View>
                </View>
                <View style={styles.rightContent}>
                  <TouchableOpacity
                    style={styles.checkboxContainer2}
                    onPress={handlePress}
                  >
                    <View
                      style={[styles.checkbox2, isChecked && styles.checkedBox]}
                    >
                      {isChecked && (
                        <Icon name="check" size={18} color="white" />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Hiển thị thêm dữ liệu khi expanded = true */}
              {expanded && (
                <View style={styles.additionalInfo}>
                  <View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text>
                        Par 4, index 15, khoảng cách tee xanh tiêu chuẩn là 347
                        yard tới giữa green.
                      </Text>
                    </View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text>
                        Phát bóng 170 yard tới cát trái, 215 yard sẽ tới cát
                        phải.
                      </Text>
                    </View>
                    <View style={styles.bulletRow}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text>Hướng bóng tốt nhất là giữa 2 hỗ cát.</Text>
                    </View>
                  </View>
                  <View style={styles.vtsd}>
                    <View style={styles.vtsd2}>
                      <View style={styles.vtsd3}>
                        <Icon
                          name="map-pin"
                          size={16}
                          color="#30B153"
                          marginRight={5}
                          top={2}
                        />
                        <Text>Vị trí</Text>
                      </View>
                    </View>
                    <View style={styles.vtsd2}>
                      <View style={styles.vtsd3}>
                        <Icon
                          name="map"
                          size={16}
                          color="#30B153"
                          marginRight={5}
                          top={2}
                        />
                        <Text>Sơ đồ</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.ghep}>
        <Text style={{ fontSize: 16, color: "white" }}>Tạo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  container2: {
    flexDirection: "row",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container4: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    marginLeft: -20,
    marginRight: -20,
    marginTop: 10,
    marginBottom: -20,
    borderTopWidth: 1,
    borderColor: "#CFCFCF",
    alignItems: "center",
  },
  closeIconContainer: {
    position: "absolute", // Đặt vị trí tuyệt đối để di chuyển vào góc
    top: -8, // Điều chỉnh vị trí dấu X lên trên
    right: -8, // Điều chỉnh vị trí dấu X sang bên phải
    backgroundColor: "white", // Màu nền cho dấu X
    borderRadius: 10, // Bo tròn dấu X
    borderWidth: 2, // Độ dày viền trắng
    borderColor: "white", // Màu viền trắng
    width: 20, // Kích thước của container dấu X
    height: 20, // Kích thước của container dấu X
    justifyContent: "center", // Căn giữa dấu X theo chiều dọc
    alignItems: "center", // Căn giữa dấu X theo chiều ngang
    elevation: 5,
  },
  cnc4: {
    backgroundColor: "#D8ECDA",
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-start",
    marginRight: 15,
    marginTop: 5,
  },
  cnc5: {
    borderWidth: 1,
    backgroundColor: "#D8ECDA",
    padding: 5,
    borderRadius: 5,
    borderColor: "#30B153",
    alignSelf: "flex-start",
  },
  tt14: {
    marginTop: 5,
    marginBottom: 10,
  },
  name2: {
    marginTop: 5,
    fontSize: 16,
    color: "#818181",
    fontWeight: "700",
  },
  table: {
    backgroundColor: "white",
    borderRadius: 9,
    width: 365,
    marginTop: 15,
    alignContent: "center",
  },
  table2: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  rightContent: {
    marginRight: -15,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    fontSize: 14,
    marginLeft: 5,
  },
  status3: {
    marginLeft: 5,
    color: "grey",
  },
  additionalInfo: {
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    width: "90%",
  },
  bulletRow: {
    flexDirection: "row", // Đặt các phần tử theo hàng ngang
    marginBottom: 5, // Khoảng cách giữa các dòng
    paddingRight: 15,
  },
  bulletPoint: {
    fontSize: 18, // Kích thước của dấu chấm
    marginRight: 10, // Khoảng cách giữa dấu chấm và nội dung văn bản
    marginLeft: 10,
    top: -3,
  },
  vtsd: {
    flexDirection: "row",
    // top: -20,
  },
  vtsd2: {
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: "#D8ECDA",
  },
  vtsd3: {
    flexDirection: "row",
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkbox2: {
    width: 25, // Chiều rộng của ô tích
    height: 25, // Chiều cao của ô tích
    borderWidth: 1, // Độ dày của viền
    borderColor: "#818181", // Màu sắc của viền
    borderRadius: 50,
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    marginRight: 15,
  },
  checkedBox: {
    backgroundColor: "#30B153", // Màu nền khi checkbox được chọn
    borderRadius: 50, // Bo góc cho checkbox
    borderWidth: 0, // Ẩn đường viền khi checkbox được chọn
  },
  checkboxContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  ghep: {
    marginTop: 20,
    backgroundColor: "#30B153",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  scv: {
    paddingBottom: 15,
  },
});

export default TaoLTO2;

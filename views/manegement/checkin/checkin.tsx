import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/FontAwesome5";
import Icon5 from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const Checkin = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const totalBoards = 2;
  // Tính số bảng đã chọn
  const selectedCount = [isChecked, isChecked2].filter(Boolean).length;

  const handlePress = () => {
    setIsChecked(!isChecked); // Thay đổi trạng thái khi nhấn vào ô tích
  };
  const handlePress2 = () => {
    setIsChecked2(!isChecked2); // Thay đổi trạng thái khi nhấn vào ô tích
  };
  const displayText =
    selectedCount > 0 ? `:đã chọn ${selectedCount}` : `:${totalBoards}`;
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.header2}>
          <Text style={isTablet ? styles.headerTexttl : styles.headerText}>
            Danh sách chờ check in
          </Text>
          <Icon style={{ color: "white" }} name="refresh-ccw" size={25} />
        </View>
      </View>
      {/* nội dung */}
      <View style={styles.container2}>
        <View style={isTablet ? styles.ndtl : styles.nd}>
          <View style={isTablet ? styles.tt12tl : styles.tt12}>
            <View style={styles.tt13}>
              <Icon2 name="search1" size={24} color={"#444444"} />
              <View style={styles.separator} />
              <TextInput
                style={{ fontSize: 16, left: 5 }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Tên, mã bagtag"
                placeholderTextColor="gray"
              ></TextInput>
            </View>
          </View>
          <View style={styles.tt14}>
            <TouchableOpacity
              style={styles.cnc5}
              onPress={() => navigation.navigate("QRScannerScreen")}
            >
              <Icon3 name="qr-code-scanner" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={isTablet ? styles.nd3tl : styles.nd3}>
          <View style={styles.nd2}>
            <View style={styles.tag}>
              <Icon4 name="tag" size={18} color={"white"} />
            </View>
            <Text style={{ fontSize: 16 }}>{displayText}</Text>
          </View>
          <View style={styles.nd2}>
            <TouchableOpacity onPress={() => navigation.navigate("Ghép LTO")}>
              <View
                style={[styles.tag2, selectedCount > 0 && styles.activeButton]}
              >
                <Text>Ghép LTO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Tạo LTO ")}>
              <View
                style={[styles.tag2, selectedCount > 0 && styles.activeButton]}
              >
                <Text>Tạo LTO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={isTablet ? styles.container3tl : styles.container3}>
          <ScrollView
            contentContainerStyle={isTablet ? styles.scvtl : styles.scv}
          >
            <View style={isTablet ? styles.cnc6tl : styles.cnc6}>
              <View style={styles.cnc7}>
                <TouchableOpacity
                  style={styles.checkboxContainer2}
                  onPress={handlePress}
                >
                  <View
                    style={[styles.checkbox2, isChecked && styles.checkedBox]}
                  >
                    {isChecked && (
                      <Icon
                        name="check"
                        size={18}
                        color="white"
                        style={styles.iconCheck}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <View style={isTablet ? styles.ttkhtl : ""}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Thông tin khách chơi")}
                  >
                    <Text style={{ fontSize: 16 }}>
                      <Text style={{ fontWeight: "700" }}>2568</Text> - Nguyễn
                      Duy Bắc
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.info}>
                    <View style={styles.box}>
                      <Text style={styles.time}>drcd66</Text>
                      <Icon
                        name="user"
                        size={15}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.time}>119</Text>
                      <Icon5
                        name="car-outline"
                        size={15}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </View>
                    <View style={styles.box}>
                      <Icon
                        name="clock"
                        size={15}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                      <Text style={styles.time}>07:30 - 11:00</Text>
                    </View>
                  </View>
                </View>
                <Icon name="alert-circle" size={28} />
              </View>
            </View>
            <View style={isTablet ? styles.cnc6tl : styles.cnc6}>
              <View style={styles.cnc7}>
                <TouchableOpacity
                  style={styles.checkboxContainer2}
                  onPress={handlePress2}
                >
                  <View
                    style={[styles.checkbox2, isChecked2 && styles.checkedBox]}
                  >
                    {isChecked2 && (
                      <Icon
                        name="check"
                        size={18}
                        color="white"
                        style={styles.iconCheck}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <View style={isTablet ? styles.ttkhtl : ""}>
                  <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontWeight: "700" }}>2500</Text> - A. Phùng
                    Quân
                  </Text>
                  <View style={styles.info}>
                    <View style={styles.box}>
                      <Text style={styles.time}>drcd66</Text>
                      <Icon
                        name="user"
                        size={15}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.time}>119</Text>
                      <Icon5
                        name="car-outline"
                        size={15}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </View>
                    <View style={styles.box}>
                      <Icon
                        name="clock"
                        size={15}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                      <Text style={styles.time}>07:30 - 11:00</Text>
                    </View>
                  </View>
                </View>
                <Icon name="alert-circle" size={28} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#50B648", // Đổi màu tại đây (ví dụ: màu xanh lá cây)
    height: 100, // Điều chỉnh chiều cao của header
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    top: 40,
  },
  headerText: {
    color: "#FFFFFF", // Màu chữ trắng
    fontSize: 20, // Kích thước chữ
    fontWeight: "bold", // Chữ đậm
    marginLeft: 65,
  },
  headerTexttl: {
    color: "#FFFFFF", // Màu chữ trắng
    fontSize: 20, // Kích thước chữ
    fontWeight: "bold", // Chữ đậm
    marginLeft: "40%",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  container2: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container3: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    marginLeft: -10,
    marginRight: -10,
    marginTop: 5,
    borderTopWidth: 1,
    borderColor: "#CFCFCF",
  },
  container3tl: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    marginLeft: -10,
    marginRight: -10,
    marginTop: 5,
    borderTopWidth: 1,
    borderColor: "#CFCFCF",
    paddingHorizontal: 10,
  },
  scv: {
    paddingBottom: 15,
  },
  scvtl: {
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginTop: 5,
  },
  ndtl: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  nd2: {
    flexDirection: "row",
    alignItems: "center",
  },
  nd3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginTop: -5,
  },
  nd3tl: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: -5,
  },
  cnc5: {
    borderWidth: 1,
    backgroundColor: "#D8ECDA",
    padding: 5,
    borderRadius: 5,
    borderColor: "#30B153",
    alignSelf: "flex-start",
  },
  tt12: {
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#EDEDED",
    width: 315,
    height: 45,
    justifyContent: "center",
  },
  tt12tl: {
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#EDEDED",
    width: "95%",
    height: 45,
    justifyContent: "center",
  },
  tt13: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  tt14: {
    marginTop: 10,
    marginBottom: 10,
  },
  separator: {
    height: "100%", // Chiều cao đường thẳng bằng với container
    width: 1, // Chiều rộng đường thẳng
    backgroundColor: "#444444", // Màu của đường thẳng
    marginLeft: 10,
  },
  tag: {
    borderRadius: 50,
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    marginRight: 5,
  },
  tag2: {
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 1,
    marginLeft: -5,
  },
  box: {
    padding: 5,
    backgroundColor: "#EAEAEA",
    borderRadius: 3,
    marginLeft: 5,
    flexDirection: "row",
  },
  time: {
    marginLeft: 5,
    fontSize: 13,
  },
  checkbox2: {
    width: 20, // Chiều rộng của ô tích
    height: 20, // Chiều cao của ô tích
    borderWidth: 1, // Độ dày của viền
    borderColor: "#818181", // Màu sắc của viền
    marginLeft: 3,
    borderRadius: 2,
  },
  checkedBox: {
    backgroundColor: "#30B153", // Màu nền khi checkbox được chọn
    borderRadius: 2, // Bo góc cho checkbox
    borderWidth: 0, // Ẩn đường viền khi checkbox được chọn
  },
  iconCheck: {
    position: "absolute", // Đặt icon theo vị trí tuyệt đối
    top: 1, // Điều chỉnh khoảng cách từ trên
    left: 1, // Điều chỉnh khoảng cách từ trái
    // Bạn có thể điều chỉnh giá trị top và left theo ý muốn
  },
  checkboxContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  cnc6: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
  },
  cnc6tl: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
    width: "47%",
  },
  cnc7: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  activeButton: {
    backgroundColor: "#F0FCF1",
    borderWidth: 1,
    borderColor: "#30B153",
  },
  ttkhtl: {
    marginLeft: "-35%",
  },
});

export default Checkin;

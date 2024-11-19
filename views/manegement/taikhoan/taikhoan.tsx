import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const Taikhoan = () => {
  const handleLogout = () => {
    navigation.navigate("Login");
  };
  const navigation = useNavigation();
  const [modalBuggy, setModalBuggy] = useState(false);
  return (
    <View style={styles.container}>
      <View style={isTablet ? styles.container3tl : styles.container3}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Thanh Nguyễn
          </Text>
          <Text style={{ fontSize: 14, color: "white" }}>0192345678</Text>
        </View>
        <View style={styles.container2}>
          <Image
            source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={isTablet ? styles.container4tl : styles.container4}>
        <View>
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Chức vụ
          </Text>
          <Text style={{ fontSize: 16, color: "white", marginTop: 10 }}>
            Caddie
          </Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Mã
          </Text>
          <Text style={{ fontSize: 16, color: "white", marginTop: 10 }}>
            drcd66
          </Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Trạng thái
          </Text>
          <Text style={styles.ranh}>Rảnh</Text>
        </View>
      </View>
      <View style={styles.container5}>
        <View style={isTablet ? styles.container6tl : styles.container6}>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon5 name="user-circle-o" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Thông tin cá nhân
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Thông tin cá nhân")}
            >
              <Icon name="chevron-right" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon2 name="key" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Đổi/ tạo mật khẩu
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Thay đổi mật khẩu")}
            >
              <Icon name="chevron-right" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon2 name="bell" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Thông báo
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Thông báo")}>
              <Icon name="chevron-right" size={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon2 name="phone" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Hỗ trợ khẩn cấp{" "}
                <Text style={{ color: "#30B153" }}>0123456789</Text>
              </Text>
            </View>
            <Icon name="chevron-right" size={40} />
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon2 name="clipboard" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Sổ tay hướng dẫn
              </Text>
            </View>
            <Icon name="chevron-right" size={40} />
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon3 name="qr-code-scanner" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Mã QR
              </Text>
            </View>
            <Icon name="chevron-right" size={40} />
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon2 name="settings" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Cài đặt
              </Text>
            </View>
            <Icon name="chevron-right" size={40} />
          </View>
          <View style={styles.ttcd}>
            <View style={styles.ttcd2}>
              <Icon4 name="logout" size={25} />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Đăng xuất
              </Text>
            </View>
            <TouchableOpacity onPress={() => setModalBuggy(true)}>
              <Icon name="chevron-right" size={40} />
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="fade"
              visible={modalBuggy}
              onRequestClose={() => setModalBuggy(false)}
            >
              <TouchableOpacity
                style={styles.modalOverlay}
                onPressOut={() => setModalBuggy(false)}
              >
                <TouchableOpacity
                  style={
                    isTablet ? styles.modalContainertl : styles.modalContainer
                  }
                  activeOpacity={1}
                >
                  <Text style={styles.dx}>Bạn có chắc đăng xuất?</Text>
                  <View style={styles.dx4}>
                    <TouchableOpacity
                      style={styles.dx2}
                      onPress={() => setModalBuggy(false)}
                    >
                      <View>
                        <Text style={{ fontSize: 16 }}>Không</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dx3} onPress={handleLogout}>
                      <View>
                        <Text style={{ fontSize: 16, color: "white" }}>
                          Đồng ý
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#50B648",
  },
  container2: {
    width: 75, // Độ rộng của avatar
    height: 75, // Độ cao của avatar
    borderRadius: 50, // Để tạo hình tròn
    borderWidth: 10, // Độ dày của đường viền
    borderColor: "#FFFFFF33", // Màu của đường viền
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "space-between",
    padding: 20,
  },
  container3tl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: "27%",
  },
  container4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 20,
    borderColor: "white",
    borderStyle: "dashed",
    paddingHorizontal: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  container4tl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 20,
    borderColor: "white",
    borderStyle: "dashed",
    paddingHorizontal: "5%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "46%",
    alignSelf: "center",
  },
  container5: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
  },
  container6: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 25,
  },
  container6tl: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 25,
    paddingHorizontal: "25%",
  },
  avatar: {
    width: 65, // Độ rộng của avatar
    height: 65, // Độ cao của avatar
    borderRadius: 50, // Để tạo hình tròn
    borderWidth: 10, // Độ dày của đường viền
  },
  ranh: {
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    alignSelf: "center",
  },
  line: {
    width: 1, // Độ dày của đường thẳng
    height: "100%", // Chiều cao của đường thẳng (có thể đặt cố định nếu cần)
    backgroundColor: "white", // Màu của đường thẳng
  },
  ttcd: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    marginRight: -5,
  },
  ttcd2: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Nền trong suốt tối
  },
  modalContainer: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 19,
    padding: 30,
  },
  modalContainertl: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 19,
    padding: 30,
    width: "40%",
    alignSelf: "center",
  },
  dx: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dx2: {
    backgroundColor: "#D8DCDC",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    width: "47%",
  },
  dx3: {
    backgroundColor: "#30B153",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    width: "47%",
  },
  dx4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default Taikhoan;

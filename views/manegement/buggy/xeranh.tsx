import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const XeRanh = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={isTablet ? styles.containertl : styles.container}>
        <View style={isTablet ? styles.tabletl : styles.table}>
          <View style={styles.table2}>
            <View style={styles.leftContent}>
              <Image
                source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.name}>001</Text>
              </View>
            </View>

            {/* Phần "Đang phục vụ" vẫn ở trong dòng chảy layout tự nhiên */}
            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#20A1EA" />
                <Text style={[styles.status, { color: "#20A1EA" }]}>
                  Đang phục vụ
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Text style={styles.status3}>TO-21405140011</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={isTablet ? styles.tabletl : styles.table}>
          <View style={styles.table2}>
            <View style={styles.leftContent}>
              <Image
                source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.name}>001</Text>
              </View>
            </View>

            {/* Phần "Đang phục vụ" vẫn ở trong dòng chảy layout tự nhiên */}
            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#FF8A00" />
                <Text style={[styles.status, { color: "#FF8A00" }]}>
                  Xe rảnh
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Text style={styles.status3}>TO-21405140011</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={isTablet ? styles.tabletl : styles.table}>
          <View style={styles.table2}>
            <View style={styles.leftContent}>
              <Image
                source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.name}>001</Text>
              </View>
            </View>

            {/* Phần "Đang phục vụ" vẫn ở trong dòng chảy layout tự nhiên */}
            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="grey" />
                <Text style={[styles.status, { color: "black" }]}>
                  Đang bảo trì
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Text style={styles.status3}>TO-21405140011</Text>
              </View>
            </View>
          </View>
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
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    paddingBottom: 150,
  },
  containertl: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    paddingBottom: 150,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  table: {
    backgroundColor: "white",
    borderRadius: 9,
    width: 365,
    marginTop: 10,
  },
  tabletl: {
    backgroundColor: "white",
    borderRadius: 9,
    width: "47%",
    marginTop: 10,
  },
  table2: {
    flexDirection: "row", // Đặt các thành phần theo hàng ngang
    padding: 15,
    justifyContent: "space-between", // Đảm bảo căn đều giữa các phần tử
    alignItems: "center", // Căn giữa theo chiều dọc
  },
  leftContent: {
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
    fontSize: 14,
    fontWeight: "bold",
  },
  name2: {
    fontSize: 14,
    color: "#818181",
  },
  rightContent: {
    flexDirection: "column", // Đặt các phần tử "Đang phục vụ" và số...0011 theo cột
    alignItems: "flex-end", // Đảm bảo căn sát phải
  },
  statusRow: {
    flexDirection: "row", // Đặt icon và text cạnh nhau
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
  status4: {
    marginLeft: 5,
    color: "#30B153",
  },
});

export default XeRanh;

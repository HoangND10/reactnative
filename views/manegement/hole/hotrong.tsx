import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";

const HoTrong = () => {
  // State để xử lý việc mở rộng nội dung
  const [expanded, setExpanded] = useState(false);

  // Hàm toggle để mở rộng hoặc thu gọn nội dung
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.table}>
          <View style={styles.table2}>
            <View style={styles.leftContent}>
              <Image
                source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
                style={styles.avatar}
                resizeMode="cover"
              />
              {/* Bọc phần tên trong TouchableOpacity để có thể bấm */}
              <TouchableOpacity onPress={toggleExpanded}>
                <View>
                  <Text style={styles.name}>001</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#20A1EA" />
                <Text style={[styles.status, { color: "#20A1EA" }]}>
                  Đang chơi
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Text style={styles.status3}>TO-21405140011</Text>
              </View>
            </View>
          </View>

          {/* Hiển thị thêm dữ liệu khi expanded = true */}
          {expanded && (
            <View style={styles.additionalInfo}>
              <View style={styles.horizontalLine} />
              <View style={styles.additionalInfo2}>
                <View style={styles.bulletRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text>
                    Par 4, index 15, khoảng cách tee xanh tiêu chuẩn là 347 yard
                    tới giữa green.
                  </Text>
                </View>
                <View style={styles.bulletRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text>
                    Phát bóng 170 yard tới cát trái, 215 yard sẽ tới cát phải.
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

        <View style={styles.table}>
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

            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#FF8A00" />
                <Text style={[styles.status, { color: "#FF8A00" }]}>
                  Hố trống
                </Text>
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
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    paddingBottom: 150,
  },
  table: {
    backgroundColor: "white",
    borderRadius: 9,
    width: 365,
    marginTop: 10,
  },
  table2: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
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
  rightContent: {
    flexDirection: "column",
    alignItems: "flex-end",
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
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#BCBCBC",
    width: "100%",
    top: -10,
  },
  additionalInfo2: {
    // top: -20,
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
});

export default HoTrong;

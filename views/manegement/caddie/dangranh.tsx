import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";

const DangRanh = () => {
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
              <View>
                <Text style={styles.name}>Nguyễn Văn Thắng</Text>
                <Text style={styles.name2}>drcd66</Text>
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
                <Icon name="check" size={20} color="#30B153" />
                <Text style={styles.status4}>...0011</Text>
                <Text style={styles.status3}>...0011</Text>
              </View>
            </View>
          </View>
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
                <Text style={styles.name}>Nguyễn Văn Thắng</Text>
                <Text style={styles.name2}>drcd66</Text>
              </View>
            </View>

            {/* Phần "Đang phục vụ" vẫn ở trong dòng chảy layout tự nhiên */}
            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#FF7A00" />
                <Text style={[styles.status, { color: "#FF7A00" }]}>
                  Đang rảnh
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Icon name="check" size={20} color="#30B153" />
                <Text style={styles.status4}>...0011</Text>
                <Text style={styles.status3}>...0011</Text>
              </View>
            </View>
          </View>
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
                <Text style={styles.name}>Nguyễn Văn Thắng</Text>
                <Text style={styles.name2}>drcd66</Text>
              </View>
            </View>

            {/* Phần "Đang phục vụ" vẫn ở trong dòng chảy layout tự nhiên */}
            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#FF0000" />
                <Text style={[styles.status, { color: "#FF0000" }]}>
                  Hết ca
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Icon name="check" size={20} color="#30B153" />
                <Text style={styles.status4}>...0011</Text>
                <Text style={styles.status3}>...0011</Text>
              </View>
            </View>
          </View>
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
                <Text style={styles.name}>Nguyễn Văn Thắng</Text>
                <Text style={styles.name2}>drcd66</Text>
              </View>
            </View>

            {/* Phần "Đang phục vụ" vẫn ở trong dòng chảy layout tự nhiên */}
            <View style={styles.rightContent}>
              <View style={styles.statusRow}>
                <Icon2 name="circle" size={10.83} color="#818181" />
                <Text style={[styles.status, { color: "#444444" }]}>
                  Tạm nghỉ
                </Text>
              </View>
              <View style={styles.statusRow}>
                <Icon name="check" size={20} color="#30B153" />
                <Text style={styles.status4}>...0011</Text>
                <Text style={styles.status3}>...0011</Text>
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
  table: {
    backgroundColor: "white",
    borderRadius: 9,
    width: 365,
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
  },
  status4: {
    marginLeft: 5,
    color: "#30B153",
  },
});

export default DangRanh;

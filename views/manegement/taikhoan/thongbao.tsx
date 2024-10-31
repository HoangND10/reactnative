import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/FontAwesome";

const ThongBao = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.container4}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Text>Book caddie</Text>
              <Icon
                name="circle"
                size={6}
                color={"#818181"}
                style={{ marginLeft: 5 }}
              />
              <Text style={{ color: "#818181", marginLeft: 5 }}>
                02 giờ trước
              </Text>
            </View>
            <Icon name="circle" size={12} color={"#30B153"} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>
            Bạn đã được book thành công
          </Text>
          <Text style={{ marginTop: 5 }}>
            Phúc Nguyên đã chọn Bạn (dr1008) cho TO-21405140011. Hãy chuẩn bị
            bắt đầu công việc vào lúc 10:30
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white", // Màu nền trắng cho toàn bộ ScrollView
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    marginTop: 15,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
  },
  container4: {
    borderBottomWidth: 1,
    borderColor: "#D6D8D9",
    paddingBottom: 15,
    marginBottom: 10,
  },
});

export default ThongBao;

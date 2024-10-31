import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/FontAwesome5";
import Icon5 from "react-native-vector-icons/Ionicons";

const GhepLTO = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const handlePress = () => {
    setIsChecked(!isChecked); // Thay đổi trạng thái khi nhấn vào ô tích
  };
  const handlePress2 = () => {
    setIsChecked2(!isChecked2); // Thay đổi trạng thái khi nhấn vào ô tích
  };
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={{ fontSize: 16 }}>
          <Text style={{ fontWeight: "700" }}>2568</Text> - Nguyễn Duy Bắc
        </Text>
      </View>
      <Text style={styles.name2}>Chọn LTO ghép:</Text>
      <View style={styles.container3}>
        <ScrollView contentContainerStyle={styles.scv}>
          <View style={styles.cnc6}>
            <View style={styles.cnc7}>
              <TouchableOpacity
                style={styles.checkboxContainer2}
                onPress={handlePress}
              >
                <View
                  style={[styles.checkbox2, isChecked && styles.checkedBox]}
                >
                  {isChecked && <Icon name="check" size={18} color="white" />}
                </View>
              </TouchableOpacity>
              <View>
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  TO-21405140011
                </Text>
                <View style={styles.info}>
                  <View style={styles.box}>
                    <Icon
                      name="clock"
                      size={15}
                      color="#818181"
                      style={{ marginLeft: 3, marginTop: 2 }}
                    />
                    <Text style={styles.time}>
                      07:30 - 11:00 | Hố bắt đầu: 08
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.ghep}>
        <Text style={{ fontSize: 16, color: "white" }}>Ghép</Text>
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
  name: {
    backgroundColor: "#D8ECDA",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  name2: {
    marginTop: 20,
    fontSize: 16,
    color: "#818181",
    fontWeight: "700",
  },
  container3: {
    flex: 1,
    marginTop: 5,
  },
  scv: {
    paddingBottom: 15,
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
    marginLeft: 5,
    flexDirection: "row",
  },
  time: {
    marginLeft: 5,
    fontSize: 13,
    color: "#818181",
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
  cnc6: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    paddingBottom: 15,
  },
  cnc7: {
    flexDirection: "row",
    alignItems: "center",
  },
  ghep: {
    backgroundColor: "#30B153",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
});

export default GhepLTO;

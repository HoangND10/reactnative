import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/MaterialIcons";

const Doimk = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}>Mật khẩu hiện tại</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={styles.input}
              value={password}
              placeholder="Nhập mật khẩu hiện tại"
              placeholderTextColor="#ACACAC"
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconContainer}
            >
              <Icon
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#888" // Màu sắc biểu tượng
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>Mật khẩu mới</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={styles.input}
              value={password2}
              onChangeText={setPassword2}
              placeholder="Nhập mật khẩu mới"
              placeholderTextColor="#ACACAC"
              secureTextEntry={!showPassword2}
            />
            <TouchableOpacity
              onPress={() => setShowPassword2(!showPassword2)}
              style={styles.iconContainer}
            >
              <Icon
                name={showPassword2 ? "visibility" : "visibility-off"}
                size={24}
                color="#888" // Màu sắc biểu tượng
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>Nhập lại mật khẩu mới</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={styles.input}
              value={password3}
              onChangeText={setPassword3}
              placeholder="Nhập lại mật khẩu mới"
              placeholderTextColor="#ACACAC"
              secureTextEntry={!showPassword3}
            />
            <TouchableOpacity
              onPress={() => setShowPassword3(!showPassword3)}
              style={styles.iconContainer}
            >
              <Icon
                name={showPassword3 ? "visibility" : "visibility-off"}
                size={24}
                color="#888" // Màu sắc biểu tượng
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.xacnhan}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Xác nhận</Text>
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
    padding: 15,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tt5: {
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
    marginTop: 10,
    marginBottom: 20,
  },
  tt6: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  input: {
    fontSize: 16,
    flex: 1, // Để TextInput chiếm toàn bộ chiều rộng
  },
  iconContainer: {
    position: "absolute",
    right: 10, // Khoảng cách từ bên phải
    top: 13, // Căn giữa icon trong input
    height: "100%",
    justifyContent: "center",
    zIndex: 3,
  },
  xacnhan: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
});

export default Doimk;

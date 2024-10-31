import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const NewPass = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleLoginPress = () => {
    console.log("Mật khẩu mới:", password, password2);
    // navigation.navigate("SomeOtherScreen"); // Nếu cần điều hướng
  };

  return (
    <View style={styles.container}>
      <View style={styles.forms}>
        <Text style={styles.label}>Mật khẩu mới</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            value={password}
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

        <Text style={styles.label}>Nhập lại mật khẩu mới</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu"
            value={password2}
            onChangeText={setPassword2}
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    top: 30,
  },
  inputContainer: {
    position: "relative", // Để đặt icon bên trong input
    width: "100%",
  },
  input: {
    fontSize: 16,
    height: 50,
    width: "100%",
    borderColor: "#E8ECF4",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    zIndex: 3,
  },
  label: {
    fontSize: 15,
    marginVertical: 5,
    color: "#444444",
    zIndex: 3,
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  loginButton: {
    width: "100%", // Đảm bảo nút chiếm toàn bộ chiều rộng
    height: 50,
    backgroundColor: "#30B153",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30, // Thêm khoảng cách giữa nút và phần nhập liệu
    zIndex: 3,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    right: 10, // Khoảng cách từ bên phải

    height: "100%",
    justifyContent: "center",
    alignItems: "center", // Căn giữa icon theo chiều dọc
    zIndex: 3,
  },
  forms: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default NewPass;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const Login = () => {
  const navigation = useNavigation(); // Khai báo useNavigation
  const [activeText, setActiveText] = useState("Caddie");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTextPress = (text) => {
    setActiveText(text);
  };

  const handleLoginPress = () => {
    navigation.navigate("Layout");
    console.log("Đăng nhập với:", emailOrPhone, password);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
      />

      <Text style={styles.text}>Chào bạn,</Text>
      <Text style={styles.text2}>Đăng nhập bằng tài khoản phù hợp</Text>

      <View style={styles.hoverContainer}>
        <TouchableOpacity onPress={() => handleTextPress("Caddie")}>
          <View
            style={{ alignItems: "center", marginTop: -15, marginBottom: 15 }}
          >
            <Text
              style={[
                styles.hoverText,
                activeText === "Caddie" && styles.hoveredText,
              ]}
            >
              CADDIE
            </Text>
            {activeText === "Caddie" && <View style={styles.underline} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTextPress("Manager")}>
          <View
            style={{ alignItems: "center", marginTop: -15, marginBottom: 15 }}
          >
            <Text
              style={[
                styles.hoverText,
                activeText === "Manager" && styles.hoveredText,
              ]}
            >
              MANAGER
            </Text>
            {activeText === "Manager" && <View style={styles.underline} />}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.forms}>
        <Text style={styles.label}>Số điện thoại/ Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại hoặc Email"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Mật khẩu</Text>
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
        {/* <TouchableOpacity onPress={() => navigation.navigate("QuenMK")}> */}
        <Text
          style={styles.label2}
          onPress={() => navigation.navigate("Quên Mật khẩu")}
        >
          Quên mật khẩu?
        </Text>
        {/* </TouchableOpacity> */}

        {/* Đảm bảo nút đăng nhập có chiều rộng và chiều cao đủ lớn */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient colors={["#FFFFFF", "#E1E79F"]} style={styles.gradient}>
        {/* Bạn có thể thêm nội dung vào gradient nếu muốn */}
      </LinearGradient>

      <Image
        style={styles.image}
        source={
          isTablet
            ? require("../../image/tabletlogin.png")
            : require("../../image/2641b5487d59c68ffc8622dc1106d432.png")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
  },
  gradient: {
    width: "100%",
    height: "45%",
    alignItems: "center",
    position: "absolute",
    top: "33%",
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: 200.77,
    position: "absolute",
    bottom: 0,
  },
  text: {
    fontSize: 28,
    position: "absolute",
    top: "18%",
    zIndex: 3,
    marginTop: 45,
  },
  text2: {
    fontSize: 16,
    color: "#808080",
    position: "absolute",
    top: "22%",
    zIndex: 3,
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 30,
    zIndex: 1,
  },
  hoverContainer: {
    flexDirection: "row",
    marginTop: 295,
    zIndex: 3,
  },
  hoverText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  hoveredText: {
    color: "#129D4C",
    textDecorationStyle: "solid",
    textDecorationColor: "#129D4C",
    fontWeight: "bold",
    marginBottom: 2,
    paddingBottom: 2,
  },
  underline: {
    width: "34%",
    height: 3,
    borderRadius: 2,
    backgroundColor: "#129D4C",
    marginTop: 2,
  },
  input: {
    fontSize: 16,
    height: 50,
    width: "100%",
    borderColor: "#30B153",
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
  label2: {
    fontSize: 18,
    marginVertical: 5,
    color: "#444444",
    zIndex: 3,
    textAlign: "right",
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
  forms: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },
  loginButton: {
    width: "100%", // Đảm bảo nút chiếm toàn bộ chiều rộng
    height: 50,
    backgroundColor: "#30B153",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20, // Thêm khoảng cách giữa nút và phần nhập liệu
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
    top: 13, // Căn giữa icon trong input
    height: "100%",
    justifyContent: "center",
    zIndex: 3,
  },
});

export default Login;

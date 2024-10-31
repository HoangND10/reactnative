import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const QuenMK = () => {
  const inputs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigation = useNavigation(); // Khởi tạo điều hướng

  const focusNextInput = (index, value) => {
    // Kiểm tra xem người dùng có bấm xóa hay không (value rỗng là khi xóa)
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus(); // Di chuyển con trỏ về ô trước đó
    } else if (value !== "" && index < 5) {
      inputs.current[index + 1].focus(); // Di chuyển con trỏ về ô tiếp theo
    }
    let updatedOtp = [...otp];
    updatedOtp[index] = value; // Cập nhật giá trị OTP
    setOtp(updatedOtp);
  };
  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      // Khi tất cả các ô OTP đều đã được điền
      navigation.navigate("Tạo mật khẩu mới"); // Điều hướng sang trang NewPass
    }
  }, [otp]);
  return (
    <View style={styles.container}>
      <Text>Nhập mã xác thực được gửi đến Số điện thoại</Text>

      <Text>+123456789</Text>

      <View style={styles.container2}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <View key={index} style={styles.inputContainer}>
              <TextInput
                ref={(el) => (inputs.current[index] = el)}
                style={styles.input}
                keyboardType="number-pad"
                maxLength={1}
                value={otp[index]} // Giá trị hiện tại
                onChangeText={(value) => focusNextInput(index, value)} // Cập nhật giá trị và xử lý sự kiện
              />
              <View style={styles.line} />
            </View>
          ))}
      </View>

      <Text style={styles.text4}>
        Mã OTP sẽ được gửi lại sau <Text style={styles.time}>172</Text> giây
      </Text>

      <Text style={styles.text5}>Không nhận được mã?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    top: 40,
  },
  container2: {
    top: 35,
    flexDirection: "row",
    justifyContent: "center",
    width: 325,
    height: 70,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  time: {
    color: "#30B153",
  },
  text4: {
    fontSize: 16,
    marginTop: 70,
  },
  text5: {
    fontSize: 16,
    marginTop: 40,
  },
  input: {
    width: 40,
    height: 40,
    textAlign: "center",
    fontSize: 24,
  },
  inputContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    position: "relative",
    top: 8,
    marginHorizontal: 3,
  },
  line: {
    height: 2,
    width: "75%",
    backgroundColor: "#ccc",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
});

export default QuenMK;

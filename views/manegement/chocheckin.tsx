import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const ChoCheckin = () => {
  // Lựa chọn ảnh khác nhau cho điện thoại và iPad
  const imageSource = isTablet
    ? require("../../image/tablte.png") // Ảnh cho iPad
    : require("../../image/Group 14329.png"); // Ảnh cho điện thoại
  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={isTablet ? styles.imageTablet : styles.imagePhone} // Áp dụng style khác cho iPad
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePhone: {
    width: "100%", // Chiều rộng bằng chiều rộng màn hình cho điện thoại
    height: 220, // Chiều cao cố định cho điện thoại
  },
  imageTablet: {
    width: "100%", // Chiều rộng bằng chiều rộng màn hình cho iPad
    height: 250, // Chiều cao cố định khác cho iPad
  },
});

export default ChoCheckin;

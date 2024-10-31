import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const LoginLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")} // Đường dẫn đến ảnh
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    backgroundColor: "white",
  },
  image: {
    width: Dimensions.get("window").width * 0.8, // Chiều rộng ảnh chiếm 80% màn hình
    height: Dimensions.get("window").height * 0.4, // Chiều cao ảnh chiếm 40% màn hình
    resizeMode: "contain", // Điều chỉnh để ảnh không bị cắt mất phần nào
  },
});

export default LoginLogo;

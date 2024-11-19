import React, { useEffect } from "react";
import { Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginLogo from "./views/login/loginlogo"; // Component logo
import Login from "./views/login/login"; // Component login
import QuenMK from "./views/login/quenmk";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NewPass from "./views/login/NewPass";
import Layout from "./views/manegement/layout";
import ChiTiet from "./views/manegement/lto/chitiet";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";
import TaoLTO from "./views/manegement/lto/taolto";
import SuaLTO from "./views/manegement/lto/sualto";
import GhepLTO from "./views/manegement/checkin/gheplto";
import TaoLTO2 from "./views/manegement/checkin/taolto";
import Ttkc from "./views/manegement/checkin/ttkc";
import Ttcn2 from "./views/manegement/taikhoan/ttcn";
import Doimk from "./views/manegement/taikhoan/doimk";
import ThongBao from "./views/manegement/taikhoan/thongbao";
import QRScannerScreen from "./views/manegement/checkin/QRScannerScreen";
import { Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import TinhDiem from "./views/manegement/lto/tinhdiem";

const Stack = createStackNavigator();
const LoginLogoScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Sử dụng replace để không quay lại được
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginLogo />
    </SafeAreaView>
  );
};

const App = () => {
  useEffect(() => {
    const setOrientation = async () => {
      const { width, height } = Dimensions.get("window");

      // Kiểm tra nếu là iPad dựa vào kích thước màn hình và Platform
      if (width >= 1000 || height >= 1000) {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );
      } else {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT
        );
      }
    };

    setOrientation();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginLogo">
        <Stack.Screen
          name="LoginLogo"
          component={LoginLogoScreen}
          options={{ headerShown: false }} // Ẩn header
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Ẩn header trên màn hình Login
        />
        <Stack.Screen
          name="Quên Mật khẩu"
          component={QuenMK}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Quên Mật Khẩu</Text>
              </View>
            ),
            headerStyle: {
              height: 100, // Đặt chiều cao của header nếu cần
              backgroundColor: "transparent", // Đặt nền trong suốt để nhìn thấy gradient
              elevation: 0, // Ẩn bóng nếu cần
            },
            headerBackground: () => (
              <LinearGradient
                colors={["#50B648", "#2A9844"]}
                style={styles.gradient}
              />
            ),
            headerTintColor: "#ffffff", // Màu nút quay lại
          }}
        />
        <Stack.Screen
          name="Tạo mật khẩu mới"
          component={NewPass}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Tạo mật khẩu mới</Text>
              </View>
            ),
            headerStyle: {
              height: 100, // Đặt chiều cao của header nếu cần
              backgroundColor: "transparent", // Đặt nền trong suốt để nhìn thấy gradient
              elevation: 0, // Ẩn bóng nếu cần
            },
            headerBackground: () => (
              <LinearGradient
                colors={["#50B648", "#2A9844"]}
                style={styles.gradient}
              />
            ),
            headerTintColor: "#ffffff", // Màu nút quay lại
          }}
        />
        <Stack.Screen
          name="Layout"
          component={Layout}
          options={{ headerShown: false }} // Ẩn header trên màn hình Login
        />
        <Stack.Screen
          name="ChiTiet"
          component={ChiTiet}
          options={{
            title: "Chi tiết",
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerTransparent: true,
            headerRight: () => (
              <View style={styles.tt}>
                <Icon2 name="circle" size={10.83} color={"gray"} />
                <Text style={styles.textWithIcon}>Đang chơi</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Tạo LTO"
          component={TaoLTO}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerStyle: {
              backgroundColor: "#50B648", // Đặt màu nền cho header
            },
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerRight: () => (
              <View>
                <Text style={styles.save}>Lưu</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Sửa LTO"
          component={SuaLTO}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerStyle: {
              backgroundColor: "#50B648", // Đặt màu nền cho header
            },
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerRight: () => (
              <View>
                <Text style={styles.save}>Lưu</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Ghép LTO"
          component={GhepLTO}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerStyle: {
              backgroundColor: "#50B648", // Đặt màu nền cho header
            },
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
          }}
        />
        <Stack.Screen
          name="Tạo LTO "
          component={TaoLTO2}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerStyle: {
              backgroundColor: "#50B648", // Đặt màu nền cho header
            },
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
          }}
        />
        <Stack.Screen
          name="Thông tin khách chơi"
          component={Ttkc}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerStyle: {
              backgroundColor: "#50B648", // Đặt màu nền cho header
            },
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerRight: () => (
              <View>
                <Text style={styles.save}>Lưu</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Thông tin cá nhân"
          component={Ttcn2}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerStyle: {
              backgroundColor: "#50B648", // Đặt màu nền cho header
            },
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerRight: () => (
              <View>
                <Text style={styles.save}>Lưu</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Thay đổi mật khẩu"
          component={Doimk}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerBackground: () => (
              <LinearGradient
                colors={["#50B648", "#2A9844"]}
                start={{ x: 1, y: 0 }} // Bắt đầu từ bên trái
                end={{ x: 0, y: 0 }} // Kết thúc ở bên phải
                style={{ flex: 1 }}
              />
            ),
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
          }}
        />
        <Stack.Screen
          name="Thông báo"
          component={ThongBao}
          options={{
            headerTitleAlign: "center", // Căn giữa tiêu đề
            headerBackground: () => (
              <LinearGradient
                colors={["#50B648", "#2A9844"]}
                start={{ x: 1, y: 0 }} // Bắt đầu từ bên trái
                end={{ x: 0, y: 0 }} // Kết thúc ở bên phải
                style={{ flex: 1 }}
              />
            ),
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerRight: () => (
              <View>
                <Icon
                  name="more-horizontal"
                  size={28}
                  color={"white"}
                  marginRight={15}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="QRScannerScreen"
          component={QRScannerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TinhDiem"
          component={TinhDiem}
          // options={{ headerShown: false }}
          options={{
            title: "Tính điểm",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "white", // Đặt màu chữ tiêu đề
            },
            headerBackground: () => (
              <LinearGradient
                colors={["#50B648", "#2A9844"]}
                start={{ x: 1, y: 0 }} // Bắt đầu từ bên trái
                end={{ x: 0, y: 0 }} // Kết thúc ở bên phải
                style={{ flex: 1 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff", // Màu chữ tiêu đề
  },
  gradient: {
    flex: 1,
  },
  tt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 30,
    width: 105,
    height: 32,
    marginRight: 15,
  },
  textWithIcon: {
    marginLeft: 5,
  },
  save: {
    color: "white",
    fontSize: 20,
    paddingRight: 20,
    fontWeight: "600",
  },
});

export default App;

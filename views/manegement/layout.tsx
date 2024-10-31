import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import ChoCheckin from "./chocheckin";
import Menu from "./lto/menu";
import Menulcbh from "./menulcbh";
import Checkin from "./checkin/checkin";
import BaoCao from "./baocao/baocao";
import Taikhoan from "./taikhoan/taikhoan";

const Tab = createBottomTabNavigator();
function DetailsStack() {
  return (
    <View>
      <View style={styles.container}>
        <ChoCheckin imageSource={require("../../image/Group 14329.png")} />
        <View style={styles.container2}>
          <Image
            source={require("../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.textname}>Xin chào, Nguyễn!</Text>
          <Icon3
            style={styles.icon2}
            name="golf-cart"
            size={26}
            color="white"
          />
          <Icon2
            style={styles.icon3}
            name="notifications-outline"
            size={26}
            color="white"
          />
        </View>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menu3}>
          <Menulcbh />
        </View>
        {/* <View style={styles.menu2}>
          <Menu />
        </View> */}
      </View>
    </View>
  );
}

const Layout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Điều hành") {
            iconName = "server";
          } else if (route.name === "Check in") {
            iconName = "check-square";
          } else if (route.name === "Trực tuyến") {
            iconName = "rss";
          } else if (route.name === "Báo cáo") {
            iconName = "file";
          } else {
            iconName = "user";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#30B153",
        tabBarInactiveTintColor: "#000000",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Điều hành"
        component={DetailsStack}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Check in"
        children={() => <Checkin />}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Trực tuyến"
        children={() => (
          <ChoCheckin imageSource={require("../../image/Group 14329.png")} />
        )}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Báo cáo"
        children={() => <BaoCao />}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Tài khoản"
        children={() => <Taikhoan />}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 300,
    position: "relative",
  },
  avatar: {
    width: 48, // Độ rộng của avatar
    height: 48, // Độ cao của avatar
    borderRadius: 50, // Để tạo hình tròn
    borderWidth: 10, // Độ dày của đường viền
    // borderColor: "black", // Màu của đường viền
    position: "absolute",
  },
  textname: {
    // position: "absolute",
    color: "white",
    top: 68,
    fontSize: 18,
    left: 80,
  },
  container2: {
    width: 53, // Độ rộng của avatar
    height: 53, // Độ cao của avatar
    borderRadius: 50, // Để tạo hình tròn
    borderWidth: 1, // Độ dày của đường viền
    borderColor: "white", // Màu của đường viền
    position: "absolute",
    top: 53,
    left: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row", // Để xếp icon và text thành hàng ngang
    // alignItems: "center", // Canh giữa icon và text theo chiều dọc
    // marginTop: 20, // Khoảng cách giữa hàng và avatar
    // marginLeft: 20, // Khoảng cách lề trái
    position: "absolute",
  },
  icon2: {
    top: 65,
    left: 162,
    paddingLeft: 3,
  },
  icon3: {
    top: 65,
    left: 172,
    paddingLeft: 3,
  },
  menu: {
    alignItems: "center",
  },

  menuContainer: {
    flex: 1, // Chiều cao cố định cho Menu
    marginTop: 120, // Điều chỉnh khoảng cách lên trên một phần
  },
  menu3: {
    height: 800, // Chiều cao cố định cho Menulcbh
    // flex: 1,
  },
});

export default Layout;

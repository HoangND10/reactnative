import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import ChoCheckin from "./chocheckin";
import Menulcbh from "./menulcbh";
import Checkin from "./checkin/checkin";
import BaoCao from "./baocao/baocao";
import Taikhoan from "./taikhoan/taikhoan";
import TrucTuyen from "./tructuyen/tructuyen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;
function DetailsStack() {
  return (
    <View>
      <View style={styles.container}>
        <ChoCheckin />
        <View style={styles.container2}>
          <Image
            source={require("../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>

        <View style={isTablet ? styles.rowTablet : styles.row}>
          <Text style={styles.textname}>Xin chào, Nguyễn!</Text>
          <View style={isTablet ? styles.conTablet : styles.container3}>
            <Icon3
              style={isTablet ? styles.icontl1 : styles.icon2}
              name="golf-cart"
              size={26}
              color="white"
            />
            <Icon2
              style={isTablet ? styles.icontl2 : styles.icon3}
              name="notifications-outline"
              size={26}
              color="white"
            />
          </View>
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

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Điều hành") iconName = "server";
          else if (route.name === "Check in") iconName = "check-square";
          else if (route.name === "Trực tuyến") iconName = "rss";
          else if (route.name === "Báo cáo") iconName = "file";
          else iconName = "user";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#30B153",
        tabBarInactiveTintColor: "#000000",
      })}
    >
      <Tab.Screen
        name="Điều hành"
        component={DetailsStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Check in"
        component={Checkin}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Trực tuyến"
        component={TrucTuyen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Báo cáo"
        component={BaoCao}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={Taikhoan}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {props.state.routeNames.map((name, index) => {
        let iconName;
        if (name === "Điều hành") iconName = "server";
        else if (name === "Check in") iconName = "check-square";
        else if (name === "Trực tuyến") iconName = "rss";
        else if (name === "Báo cáo") iconName = "file";
        else iconName = "user";

        return (
          <DrawerItem
            key={name}
            label={() => (
              <View style={{ alignItems: "center", left: 20, marginTop: 55 }}>
                <Icon
                  name={iconName}
                  size={24}
                  color={props.state.index === index ? "#30B153" : "#000000"}
                />
                <Text
                  style={{
                    color: props.state.index === index ? "#30B153" : "#000000",
                  }}
                >
                  {name}
                </Text>
              </View>
            )}
            onPress={() => props.navigation.navigate(name)}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 135,
          backgroundColor: "white", // màu nền của drawer
          elevation: 0, // tắt bóng cho Android
        },
        drawerType: "permanent",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Điều hành" component={DetailsStack} />
      <Drawer.Screen name="Check in" component={Checkin} />
      <Drawer.Screen name="Trực tuyến" component={TrucTuyen} />
      <Drawer.Screen name="Báo cáo" component={BaoCao} />
      <Drawer.Screen name="Tài khoản" component={Taikhoan} />
    </Drawer.Navigator>
  );
}

const Layout = () => {
  return isTablet ? <DrawerNavigator /> : <BottomTabNavigator />;
  // return (
  //   <Tab.Navigator
  //     screenOptions={({ route }) => ({
  //       tabBarIcon: ({ focused, color, size }) => {
  //         let iconName;

  //         if (route.name === "Điều hành") {
  //           iconName = "server";
  //         } else if (route.name === "Check in") {
  //           iconName = "check-square";
  //         } else if (route.name === "Trực tuyến") {
  //           iconName = "rss";
  //         } else if (route.name === "Báo cáo") {
  //           iconName = "file";
  //         } else {
  //           iconName = "user";
  //         }

  //         return <Icon name={iconName} size={size} color={color} />;
  //       },
  //       tabBarActiveTintColor: "#30B153",
  //       tabBarInactiveTintColor: "#000000",
  //     })}
  //   >
  //     <Tab.Screen
  //       options={{ headerShown: false }}
  //       name="Điều hành"
  //       component={DetailsStack}
  //     />

  //     <Tab.Screen
  //       options={{ headerShown: false }}
  //       name="Check in"
  //       children={() => <Checkin />}
  //     />
  //     <Tab.Screen
  //       options={{ headerShown: false }}
  //       name="Trực tuyến"
  //       children={() => <TrucTuyen />}
  //     />
  //     <Tab.Screen
  //       options={{ headerShown: false }}
  //       name="Báo cáo"
  //       children={() => <BaoCao />}
  //     />
  //     <Tab.Screen
  //       options={{ headerShown: false }}
  //       name="Tài khoản"
  //       children={() => <Taikhoan />}
  //     />
  //   </Tab.Navigator>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 300,
    position: "relative",
  },
  container3: {
    flexDirection: "row",
    position: "absolute", // Đặt vị trí tuyệt đối
    top: 65, // Cách mép trên 65px
    right: 15, // Cách mép phải 10px
  },
  conTablet: {
    flexDirection: "row",
    position: "absolute",
    top: 75, // Cách mép trên 65px
    right: 50, // Cách mép phải 10px
  },
  avatar: {
    width: 48, // Độ rộng của avatar
    height: 48, // Độ cao của avatar
    borderRadius: 50, // Để tạo hình tròn
    borderWidth: 10, // Độ dày của đường viền
    position: "absolute",
  },
  textname: {
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
    position: "absolute",
    width: "100%",
  },
  rowTablet: {
    position: "absolute",
    width: "100%",
  },
  icon2: {
    paddingLeft: 5,
  },
  icon3: {
    paddingLeft: 5,
  },
  icontl1: {
    paddingLeft: 15,
  },
  icontl2: {
    paddingLeft: 15,
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
  tabBarTablet: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 500, // Chiều rộng của tab bar khi ở chế độ iPad
    height: "100%", // Chiều cao toàn bộ màn hình
  },
  tabBarBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%", // Chiều rộng full cho tab bar ở chế độ bottom
    height: 60,
  },
});

export default Layout;

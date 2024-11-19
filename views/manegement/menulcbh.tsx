import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useNavigation, useRoute } from "@react-navigation/native";
import Menu from "./lto/menu";
import All from "./caddie/all";
import Menu2 from "./buggy/menu2";
import Menu3 from "./hole/menu3";
import TinhDiem from "./lto/tinhdiem";

const initialLayout = { width: Dimensions.get("window").width };

const MenuLcbh = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "lto", title: "LTO" },
    { key: "caddie", title: "Caddie" },
    { key: "buggy", title: "Buggy" },
    { key: "hole", title: "Hole" },
    // { key: "TinhDiem", title: "Tính điểm" },
  ]);

  const renderScene = SceneMap({
    lto: Menu,
    caddie: All,
    buggy: Menu2,
    hole: Menu3,
    // TinhDiem: TinhDiem,
  });

  // Lấy kích thước màn hình hiện tại
  const { width } = Dimensions.get("window");

  // Kiểm tra thiết bị có phải iPad không
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={isTablet ? styles.tabBarTablet : styles.tabBar}
            indicatorStyle={{ backgroundColor: "transparent" }} // Xóa đường gạch chân
            renderLabel={({ route, focused }) => (
              <View
                style={[
                  styles.tabContainer,
                  focused ? styles.selectedTab : null, // Áp dụng style khi tab được chọn
                ]}
              >
                <Text
                  style={[
                    styles.tabLabel,
                    { color: focused ? "white" : "#30B153" }, // Đổi màu chữ khi được chọn
                  ]}
                >
                  {route.title}
                </Text>
              </View>
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "white",
    borderRadius: 60, // Bo góc cho phần thanh Tab
    marginHorizontal: 15, // Khoảng cách hai bên
    borderWidth: 1,
    borderColor: "#ECECEC",
    justifyContent: "space-between", // Căn giữa các tab với khoảng cách đều
    // paddingHorizontal: 5,
    height: 50, // Chiều cao của TabBar
  },
  tabBarTablet: {
    backgroundColor: "white",
    borderRadius: 60, // Bo góc cho phần thanh Tab
    marginHorizontal: 15, // Khoảng cách hai bên
    borderWidth: 1,
    borderColor: "#ECECEC",
    justifyContent: "space-between", // Căn giữa các tab với khoảng cách đều
    width: "30%",
    height: 50, // Chiều cao của TabBar
  },
  tabContainer: {
    justifyContent: "center", // Đảm bảo chữ nằm giữa theo chiều dọc
    alignItems: "center", // Căn giữa chữ theo chiều ngang
    height: 40, // Chiều cao tổng cộng của container
    width: 80, // Cố định chiều rộng của tabContainer
    borderRadius: 30, // Bo góc của container bao quanh chữ
    top: -5,
  },
  selectedTab: {
    backgroundColor: "#51B748", // Màu nền của tab khi được chọn
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuLcbh;

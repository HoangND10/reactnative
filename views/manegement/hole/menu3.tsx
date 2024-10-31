import * as React from "react";
import { View, StyleSheet, Text, Dimensions, TextInput } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Feather"; // Import icon library
import Icon2 from "react-native-vector-icons/AntDesign";
import All from "./all";
import DangChoi from "./dangchoi";
import HoTrong from "./hotrong";

const initialLayout = { width: Dimensions.get("window").width };

const Menu3 = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Tất cả" },
    { key: "second", title: "Đang chơi" },
    { key: "three", title: "Hố trống" },
  ]);

  const renderScene = SceneMap({
    first: All,
    second: DangChoi,
    three: HoTrong,
  });

  const renderLabel = ({ route }) => {
    const isActive = route.key === routes[index].key; // Kiểm tra tab đang chọn
    return (
      <Text style={{ fontWeight: isActive ? "bold" : "normal", fontSize: 16 }}>
        {route.title}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {/* Form tìm kiếm */}
      <View style={styles.iconContainer}>
        <View style={styles.containerdmyt}>
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            placeholderTextColor="#888"
          />
        </View>
        <Icon2 name="search1" size={24} color="black" paddingRight={10} />
      </View>

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={renderLabel}
            style={styles.tabBar}
            indicatorStyle={{
              backgroundColor: "#299B48",
              height: 2,
              width: 100,
              borderRadius: 2,
              marginLeft: 16,
            }}
            scrollEnabled={true} // Cho phép cuộn ngang khi có nhiều hơn 3 tab
            tabStyle={styles.tabStyle} // Cố định chiều rộng của mỗi tab
          />
        )}
      />
    </View>
  );
};

export default Menu3;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo container chiếm toàn bộ không gian
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 15,
  },
  tabView: {
    backgroundColor: "white", // Đặt màu nền TabView thành màu trắng
  },
  tabBar: {
    backgroundColor: "white", // Màu nền cho TabBar
  },
  iconContainer: {
    paddingVertical: 5, // Giảm padding trên và dưới
    paddingHorizontal: 10, // Giữ khoảng cách trái phải
    flexDirection: "row", // Đặt các phần tử trong dòng
    justifyContent: "center", // Đưa các phần tử vào giữa theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    borderColor: "#ccc", // Thêm viền cho khung tìm kiếm
    borderWidth: 1,
    borderRadius: 50, // Bo góc của form tìm kiếm
    backgroundColor: "#fff", // Màu nền trắng
    width: "95%", // Đặt chiều rộng của form chiếm 90% màn hình
    alignSelf: "center", // Căn giữa form tìm kiếm
    marginTop: 10,
  },
  containerdmyt: {
    flex: 1, // Đảm bảo TextInput chiếm phần lớn không gian
    marginRight: 10, // Khoảng cách giữa TextInput và Icon
  },
  input: {
    height: 30, // Giảm chiều cao của form
    paddingHorizontal: 10, // Khoảng cách giữa chữ và cạnh form
    fontSize: 14, // Kích thước chữ giảm để phù hợp với form nhỏ hơn
    color: "black", // Màu chữ trong ô tìm kiếm
  },
  tabStyle: {
    width: 130, // Đảm bảo mỗi tab có chiều rộng cố định để hiển thị 3 tab trên màn hình
  },
});

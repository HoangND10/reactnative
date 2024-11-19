import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Feather"; // Import icon library
import Icon2 from "react-native-vector-icons/AntDesign";
import DaCheckin from "./dacheckin";
import Dangchoi from "./dangchoi";
import Ketthuc from "./ketthuc";
import { useNavigation } from "@react-navigation/native";

const initialLayout = { width: Dimensions.get("window").width };

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const Menu = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Đã check in" },
    { key: "second", title: "Đang chơi" },
    { key: "three", title: "Kết thúc" },
  ]);

  const renderScene = SceneMap({
    first: DaCheckin,
    second: Dangchoi,
    three: Ketthuc,
  });

  const renderLabel = ({ route }) => {
    const isActive = route.key === routes[index].key; // Kiểm tra tab đang chọn
    return (
      <Text style={{ fontWeight: isActive ? "bold" : "normal", fontSize: 16 }}>
        {route.title}
      </Text>
    );
  };

  // Hàm để định dạng thời gian hiện tại
  const getCurrentTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `Hôm nay, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  // Tạo state để lưu thời gian
  const [currentTime, setCurrentTime] = React.useState(getCurrentTime());

  // Cập nhật thời gian mỗi giây
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // Cập nhật mỗi giây

    // Dọn dẹp timer khi component unmount
    return () => clearInterval(timer);
  }, []);

  const [modalBuggy, setModalBuggy] = React.useState(false);
  const [inputText, setInputText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.containerdmyt}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Tạo LTO")}> */}
          <Icon name="calendar" size={28} />
          {/* </TouchableOpacity> */}
          <View style={styles.timeborder}>
            <Text>{currentTime}</Text>
          </View>
        </View>
        {isTablet && (
          <TabView
            navigationState={{ index, routes }}
            renderScene={() => null}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={styles.tabView}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                renderLabel={renderLabel}
                style={styles.tabBar2}
                tabStyle={{
                  width: 150,
                }}
                indicatorStyle={{
                  backgroundColor: "#299B48",
                  height: 2,
                  width: 30,
                  borderRadius: 2,
                  marginLeft: 60,
                  top: 35,
                }}
              />
            )}
          />
        )}
        <TouchableOpacity onPress={() => setModalBuggy(true)}>
          <Icon2 name="search1" size={28} />
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={modalBuggy}
          onRequestClose={() => setModalBuggy(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPressOut={() => setModalBuggy(false)}
          >
            <TouchableOpacity
              style={isTablet ? styles.modalContainertl : styles.modalContainer}
              activeOpacity={1}
            >
              <TouchableOpacity
                style={{ position: "absolute", top: 12, left: 10 }}
                onPress={() => setModalBuggy(false)}
              >
                <Icon name="x" size={24} />
              </TouchableOpacity>
              <Text style={styles.buggy}>Tìm kiếm</Text>
              <View style={styles.buggyline} />
              <View style={styles.tt12}>
                <View style={styles.tt13}>
                  <Icon2 name="search1" size={20} color={"#ACACAC"} />
                  <TextInput
                    style={{ fontSize: 14, left: 5 }}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Nhập LTO"
                    placeholderTextColor="#ACACAC"
                  ></TextInput>
                </View>
              </View>
              <View style={styles.tk3}>
                <View style={styles.tk2}>
                  <Text style={styles.tk4}>Số lượng xe</Text>
                </View>
                <View style={styles.tk2}>
                  <Text style={styles.tk4}>Số lượng người</Text>
                </View>
              </View>
              <View style={styles.tk}>
                <View style={styles.tk2}>
                  <View style={styles.tk4}>
                    <Text style={{ top: 3 }}>01/08/2024</Text>
                    <Icon name="calendar" size={24} color={"#30B153"} />
                  </View>
                </View>
                <View style={styles.tk2}>
                  <View style={styles.tk4}>
                    <Text style={{ top: 3 }}>08/08/2024</Text>
                    <Icon name="calendar" size={24} color={"#30B153"} />
                  </View>
                </View>
              </View>
              <View style={styles.tk}>
                <View style={styles.tk5}>
                  <Text style={{ color: "white" }}>Lọc</Text>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
        renderTabBar={(props) =>
          isTablet ? null : (
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
            />
          )
        }
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo container chiếm toàn bộ không gian
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 15,
  },
  iconContainer: {
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    color: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAEA",
  },
  tabView: {
    backgroundColor: "white", // Đặt màu nền TabView thành màu trắng
  },
  tabBar: {
    backgroundColor: "white", // Màu nền cho TabBar
  },
  tabBar2: {
    backgroundColor: "white", // Màu nền cho TabBar
    marginTop: -20,
    top: 10,
    right: "-45%",
  },
  timeborder: {
    borderRadius: 20,
    backgroundColor: "#D8ECDA",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 5,
  },
  containerdmyt: {
    flexDirection: "row",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền trong suốt tối
  },
  modalContainer: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 30,
    padding: 20,
  },
  modalContainertl: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 30,
    padding: 20,
    width: 350,
    alignSelf: "center",
  },
  buggy: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    bottom: 7,
  },
  buggyline: {
    marginTop: 10,
    height: 1, // Độ dày của đường kẻ
    backgroundColor: "#ccc", // Màu sắc của đường kẻ
    position: "absolute", // Đặt vị trí tuyệt đối
    left: 0, // Dài hết từ cạnh trái
    right: 0, // Đến cạnh phải
    top: 40, // Điều chỉnh vị trí theo chiều dọc (phụ thuộc vào chiều cao của Text "Chọn Buggy")
  },
  tt12: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ECECEC",
    marginTop: 20,
    marginBottom: 10,
  },
  tt13: {
    flexDirection: "row",
    padding: 5,
  },
  tk: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  tk3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tk2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#30B153",
    backgroundColor: "#F0FCF1",
    width: 140,
    height: 37,
    justifyContent: "center",
  },
  tk4: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tk5: {
    borderRadius: 5,
    backgroundColor: "#30B153",
    width: "100%",
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
});

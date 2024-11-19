import { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const Dangchoi = () => {
  const [showButton, setShowButton] = useState(true); // Trạng thái ẩn/hiện của nút
  const [lastScrollY, setLastScrollY] = useState(0); // Theo dõi vị trí cuộn trước đó
  const navigation = useNavigation();
  const [showInfo, setShowInfo] = useState([]); // Sử dụng mảng để theo dõi trạng thái hiển thị thông tin cho từng phiên

  const toggleInfo = (index) => {
    setShowInfo((prev) => {
      const updatedShowInfo = [...prev];
      updatedShowInfo[index] = !updatedShowInfo[index]; // Chuyển đổi trạng thái hiển thị cho phiên tương ứng
      return updatedShowInfo;
    });
  };

  const [modalBuggy, setModalBuggy] = useState(false);
  const [checkinData, setCheckinData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const checkinResponse = await axios.get("http://10.0.2.2:3000/checkin");
        const statusResponse = await axios.get("http://10.0.2.2:3000/status");
        const userResponse = await axios.get("http://10.0.2.2:3000/user");

        setCheckinData(checkinResponse.data);
        setStatusData(statusResponse.data);
        setUserData(userResponse.data);
        setShowInfo(new Array(checkinResponse.data.length).fill(false)); // Khởi tạo trạng thái hiển thị cho từng phiên là false

        // console.log("Dữ liệu checkin:", checkinResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Không thể lấy dữ liệu. Vui lòng kiểm tra kết nối.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!checkinData.length) {
    return (
      <View>
        <Text>Không có dữ liệu check-in để hiển thị.</Text>
      </View>
    );
  }

  // Hàm theo dõi cuộn
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;

    if (currentScrollY > lastScrollY) {
      // Nếu cuộn lên thì ẩn nút
      setShowButton(false);
    } else {
      // Nếu cuộn xuống thì hiện nút
      setShowButton(true);
    }

    setLastScrollY(currentScrollY);
  };

  const handlePress = () => {
    // Điều hướng đến màn hình Tính Điểm (TinhDiem)
    navigation.navigate("TinhDiem");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll} // Gán hàm handleScroll cho sự kiện onScroll
        scrollEventThrottle={16} // Throttle cho sự kiện cuộn
      >
        <View style={isTablet ? styles.containerTablet : styles.container}>
          {checkinData.map((session, index) => {
            // console.log("Session ID:", session.id, "Index:", index);
            const {
              session_code,
              start_time,
              end_time,
              total_players,
              id_status,
              id_user,
              holes_started,
              total_holes,
              holes_play,
              holes_current,
            } = session;

            // Lấy trạng thái và người dùng từ mảng status và user
            const sessionStatus = statusData.find(
              (status) => status.id === id_status
            )?.Name;
            // Tìm người dùng theo id
            const user = userData.find((user) => user.id === id_user);

            // Lấy tất cả người dùng có class = 1
            const classUsers = userData.filter((user) => user.class === 1);
            // Xác định màu icon dựa trên trạng thái
            let iconColor = "grey"; // Màu mặc định
            if (sessionStatus === "Đã checkin") {
              iconColor = "grey"; // Giữ nguyên màu cho trạng thái đã checkin
            } else if (sessionStatus === "Đang chơi") {
              iconColor = "#007bff"; // Màu primary (thay đổi màu này nếu cần)
            } else if (sessionStatus === "Tạm dừng") {
              iconColor = "#dc3545"; // Màu danger (thay đổi màu này nếu cần)
            }
            return (
              <View
                style={isTablet ? styles.tabletl : styles.table}
                key={`${session.id}-${index}`}
              >
                <View style={styles.nd}>
                  <View style={styles.htable}>
                    <View style={styles.htable2}>
                      <View style={styles.row}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("ChiTiet")}
                        >
                          <Text style={styles.bold}>{session_code}</Text>
                        </TouchableOpacity>
                        <View style={styles.tt}>
                          <Icon2 name="circle" size={10.83} color={iconColor} />
                          <Text style={styles.textWithIcon}>
                            {sessionStatus || "Không có thông tin"}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.timeContainer}>
                        <Icon name="clock" size={10.83} color="grey" />
                        <Text style={styles.time}>
                          {start_time} - {end_time}
                        </Text>
                        <View style={styles.ttht}>
                          <Text style={styles.ttht2}>nhanh 00:35:02</Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => setModalBuggy(true)}>
                      <Icon name="more-vertical" size={24} marginLeft={10} />
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
                          style={
                            isTablet
                              ? styles.modalContainertl
                              : styles.modalContainer
                          }
                          activeOpacity={1}
                        >
                          <TouchableOpacity
                            style={{ position: "absolute", top: 12, left: 10 }}
                            onPress={() => setModalBuggy(false)}
                          >
                            <Icon name="x" size={24} />
                          </TouchableOpacity>
                          <Text style={styles.buggy}>Thao tác</Text>
                          <View style={styles.buggyline} />
                          <View style={styles.tk3}>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Tạm dừng</Text>
                            </View>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Chơi tiếp</Text>
                            </View>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Nhảy hố</Text>
                            </View>
                          </View>
                          <View style={styles.tk}>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Chơi thêm</Text>
                            </View>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Sửa LTO</Text>
                            </View>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Ghép LTO</Text>
                            </View>
                          </View>
                          <View style={styles.tk}>
                            <View style={styles.tk5}>
                              <Text>Kết thúc</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
                  </View>
                  <View style={styles.horizontalLine} />

                  <View style={styles.ttkh}>
                    <View style={styles.containerh}>
                      <Text>Hố bắt đầu</Text>
                      <Text style={styles.n1}>{holes_started}</Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.containerh}>
                      <Text>Hố Chơi</Text>
                      <Text style={styles.n1}>
                        <Text style={{ color: "#299B48" }}>{holes_play}</Text>/
                        {total_holes}
                      </Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.containerh}>
                      <Text>Hố hiện tại</Text>
                      <Text style={styles.n11}>{holes_current}</Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.containerh}>
                      <Text>Người chơi</Text>
                      <View style={styles.playerContainer}>
                        <Text style={styles.n1}>{total_players}</Text>
                        <TouchableOpacity onPress={() => toggleInfo(index)}>
                          <Icon
                            name="chevron-right"
                            size={16}
                            color="#30B153"
                            style={{ marginLeft: 7 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {showInfo[index] && (
                    <View style={styles.infoBox}>
                      {/* Hiển thị thông tin của tất cả người dùng có class = 1 */}
                      {classUsers.map((classUser, userIndex) => (
                        <View style={styles.info} key={userIndex}>
                          <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.n2}>
                              {classUser.name || "Null"}
                            </Text>
                          </TouchableOpacity>
                          <View style={styles.info}>
                            <View style={styles.box}>
                              <Text style={styles.n3}>
                                {classUser.vehicle_code || "Null"}
                              </Text>
                              <Icon
                                name="user"
                                size={16}
                                color="#818181"
                                style={{ marginLeft: 3, marginTop: 2 }}
                              />
                            </View>
                            <View style={styles.box}>
                              <Text style={styles.n3}>
                                {classUser.additional_code || "Null"}
                              </Text>
                              <Icon3
                                name="car-outline"
                                size={16}
                                color="#818181"
                                style={{ marginLeft: 3, marginTop: 2 }}
                              />
                            </View>
                            <View style={styles.box}>
                              <Text style={styles.n3}>
                                {classUser.vehicle_number || "Null"}
                              </Text>
                            </View>
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      {/* Nút dấu cộng */}
      {showButton && (
        <View
          style={isTablet ? styles.floatingButton2tl : styles.floatingButton2}
        >
          <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => navigation.navigate("Tạo LTO")}
          >
            <Icon name="plus" size={50} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    paddingBottom: 160,
  },
  containerTablet: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    paddingBottom: 160,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  scrollContent: {
    flexGrow: 1, // Cho phép nội dung cuộn nếu vượt quá màn hình
    paddingBottom: 20,
  },
  table: {
    backgroundColor: "white",
    borderRadius: 9,
    width: 365,
    height: "auto",
    top: 10,
    marginTop: 10,
  },
  tabletl: {
    backgroundColor: "white",
    borderRadius: 9,
    width: "45%",
    height: "auto",
    top: 10,
    marginTop: 10,
  },
  nd: {
    padding: 15,
  },
  timeContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "grey",
    marginLeft: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tt: {
    flexDirection: "row",
    alignItems: "center",
  },
  textWithIcon: {
    marginLeft: 5,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#DDDDDD",
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
  },
  verticalLine: {
    width: 1,
    backgroundColor: "#DDDDDD",
    height: "100%",
    marginHorizontal: 10,
  },
  ttkh: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  n1: {
    fontWeight: "bold",
    fontSize: 16,
  },
  n11: {
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 22,
    borderColor: "#B9B9B9",
    borderWidth: 1,
    paddingTop: 1,
    paddingRight: 6,
    paddingBottom: 1,
    paddingLeft: 6,
  },
  n2: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#818181",
  },
  n3: {
    color: "#818181",
  },
  containerh: {
    alignItems: "center",
  },

  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F0F6EF", // Màu nền cho bảng thông tin
    borderRadius: 5,
    width: "100%",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 1,
  },
  box: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 3,
    marginLeft: 5,
    flexDirection: "row",
  },
  ttht: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  ttht2: {
    borderRadius: 5,
    backgroundColor: "#E3F5FF",
    color: "#20A1EA",
    paddingTop: 1,
    paddingRight: 6,
    paddingBottom: 1,
    paddingLeft: 6,
  },
  htable: {
    flexDirection: "row",
    alignItems: "center",
  },
  htable2: {
    width: "90%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Nền trong suốt tối
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
    width: "30%",
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
  tk: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  tk3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 5,
  },
  tk2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#30B153",
    backgroundColor: "#F0FCF1",
    width: 90,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  tk4: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tk5: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E40000",
    backgroundColor: "#FCF0F0",
    width: "100%",
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    // position: "absolute",
    backgroundColor: "#30B153",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 10,
  },
  floatingButton2: {
    position: "absolute",
    bottom: 120,
    right: 25,
  },
  floatingButton2tl: {
    position: "absolute",
    bottom: 200,
    right: 40,
  },
});

export default Dangchoi;

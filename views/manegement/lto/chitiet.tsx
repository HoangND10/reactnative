import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ChiTiet = () => {
  const navigation = useNavigation();
  const [modalBuggy, setModalBuggy] = useState(false);
  const [modalBuggy2, setModalBuggy2] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Trạng thái checkbox

  const handlePress = () => {
    setIsChecked(!isChecked); // Thay đổi trạng thái khi nhấn vào ô tích
  };
  return (
    <View style={styles.ct}>
      <Image
        source={require("../../../image/Group 14329.png")} // Đường dẫn tới hình ảnh
        style={styles.image} // Sử dụng style đã định nghĩa
        resizeMode="cover" // Chế độ hiển thị hình ảnh
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tt2Container}>
          {/* Hố hiện tại và tg nhanh chậm */}
          <View style={styles.tt2}>
            <Image
              source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")} // Đường dẫn tới hình ảnh
              style={styles.image2} // Sử dụng style đã định nghĩa
              resizeMode="cover" // Chế độ hiển thị hình ảnh
            />
            <Text style={styles.holes}>
              Hố hiện tại: <Text style={styles.n11}>2</Text>
            </Text>
            {/* Di chuyển dòng văn bản "nhanh 00:35:02" sang bên phải */}
            <Text style={styles.ttht2}>nhanh 00:35:02</Text>
          </View>
          {/* Thao tác */}
          <View style={styles.thaotac}>
            <View style={styles.thaotac3}>
              <Text style={styles.thaotac2}>Thao tác:</Text>
              <View style={styles.ficon}>
                <View style={styles.iconContainer}>
                  <Icon2 style={styles.icon} name="target" size={30} />
                </View>
                <View style={[styles.iconContainer, { marginLeft: 15 }]}>
                  <Icon style={styles.icon} name="refresh-ccw" size={27} />
                </View>
              </View>
            </View>
            <View style={styles.ftext}>
              <View style={styles.text1}>
                <Text style={styles.text2}>Tạm dừng</Text>
                <Text style={styles.text2}>Chơi tiếp</Text>
                <Text style={styles.text2}>Nhảy hố</Text>
              </View>
              <View style={styles.text1}>
                <Text style={styles.text2}>Chơi thêm</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Sửa LTO")}
                >
                  <Text style={styles.text2}>Sửa LTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalBuggy2(true)}>
                  <Text style={styles.text2}>Ghép LTO</Text>
                </TouchableOpacity>
                <Modal
                  transparent={true}
                  animationType="fade"
                  visible={modalBuggy2}
                  onRequestClose={() => setModalBuggy2(false)}
                >
                  <TouchableOpacity
                    style={styles.modalOverlay}
                    onPressOut={() => setModalBuggy2(false)}
                  >
                    <TouchableOpacity
                      style={styles.modalContainer}
                      activeOpacity={1}
                    >
                      <TouchableOpacity
                        style={{ position: "absolute", top: 12, left: 10 }}
                        onPress={() => setModalBuggy2(false)}
                      >
                        <Icon name="x" size={24} />
                      </TouchableOpacity>
                      <Text style={styles.buggy}>Ghép LTO</Text>
                      <View style={styles.buggyline} />
                      <View style={styles.tk3}>
                        <View style={styles.ghep2}>
                          <Text>TO-240403199053</Text>
                          <Icon name="chevron-right" size={20} />
                        </View>
                      </View>
                      <View style={styles.gheplto}>
                        <View>
                          <Text style={{ marginTop: 10, color: "#444444" }}>
                            Tee Time:
                          </Text>
                          <Text style={{ marginTop: 10, color: "#444444" }}>
                            Họ tên:
                          </Text>
                          <Text style={{ marginTop: 10, color: "#444444" }}>
                            Bag Tag
                          </Text>
                          <Text style={{ marginTop: 10, color: "#444444" }}>
                            Caddie
                          </Text>
                          <Text style={{ marginTop: 10, color: "#444444" }}>
                            Buggy
                          </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                          <Text style={{ fontWeight: "700", marginTop: 10 }}>
                            17:19
                          </Text>
                          <Text style={{ fontWeight: "700", marginTop: 10 }}>
                            Lê Kiều
                          </Text>
                          <Text style={{ fontWeight: "700", marginTop: 10 }}>
                            83
                          </Text>
                          <Text style={{ fontWeight: "700", marginTop: 10 }}>
                            --
                          </Text>
                          <Text style={{ fontWeight: "700", marginTop: 10 }}>
                            --
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </Modal>
              </View>
              <View>
                <Text style={styles.text3}>Kết thúc</Text>
              </View>
            </View>
          </View>

          {/* Chi tiết LTO */}
          <Text style={styles.chitiet2}>Chi tiết LTO</Text>
          <View style={styles.chitiet3}>
            <View style={styles.chitiet}>
              <View style={styles.chitiet4}>
                <Text style={styles.chitiet5}>Ngày chơi: </Text>
                <Text style={styles.chitiet5}>04/04/2024</Text>
              </View>
              <View style={styles.chitiet4}>
                <Text style={styles.chitiet5}>Giờ chơi: </Text>
                <Text style={styles.chitiet5}>07:30 - 11:00</Text>
              </View>
              <View style={styles.chitiet4}>
                <Text style={styles.chitiet5}>Trạng thái: </Text>
                <Text style={styles.chitiet6}>Đang chơi</Text>
              </View>
              <View style={styles.chitiet4}>
                <Text style={styles.chitiet5}>Tạo bởi: </Text>
                <Text style={styles.chitiet5}>Nguyễn Văn Thanh</Text>
              </View>
            </View>
          </View>

          {/* 1 vài thông tin khác */}
          <View style={styles.ttk}>
            <View style={styles.ttk2}>
              <View style={styles.ttk4}>
                <View style={styles.ttk3}>
                  <Text>Số người chơi: </Text>
                  <Text style={{ fontWeight: "bold" }}>2</Text>
                </View>
                <View style={styles.ttk3}>
                  <Text>Tee-time: </Text>
                  <Text style={{ fontWeight: "bold" }}>07:36</Text>
                </View>
                <View style={styles.ttk3}>
                  <Text>Số hố: </Text>
                  <Text style={{ fontWeight: "bold" }}>0/18</Text>
                </View>
                <View style={styles.ttk3}>
                  <Text>Đường đi: </Text>
                  <Text style={{ fontWeight: "bold" }}>--</Text>
                </View>
              </View>
              <View style={styles.ttk4}>
                <View style={styles.ttk3}>
                  <Text>Số lượng xe: </Text>
                  <Text style={{ fontWeight: "bold" }}>2</Text>
                </View>
                <View style={styles.ttk3}>
                  <Text>Hố đang chơi: </Text>
                  <Text style={{ fontWeight: "bold" }}>--</Text>
                </View>
                <View style={styles.ttk3}>
                  <Text>Đường về: </Text>
                  <Text style={{ fontWeight: "bold" }}>--</Text>
                </View>
                <View style={styles.ttk3}>
                  <Text>Hố xuất phát: </Text>
                  <Text style={{ fontWeight: "bold" }}>8</Text>
                </View>
              </View>
            </View>
          </View>

          {/* danh sách người chơi */}
          <View style={styles.dsnc}>
            <View style={{ padding: 15 }}>
              <View style={styles.dsnc2}>
                <Text style={styles.dsnc3}>Danh sách người chơi </Text>
                <Text style={styles.dsnc4}>(3)</Text>
              </View>
              {/* chức năng */}
              <View style={styles.infoBox2}>
                <View style={styles.info2}>
                  <TouchableOpacity
                    style={styles.checkboxContainer2}
                    onPress={handlePress}
                  >
                    <View style={styles.checkbox2}>
                      {isChecked && (
                        <Icon name="check" size={18} color="black" />
                      )}
                    </View>
                  </TouchableOpacity>
                  <View style={styles.info2}>
                    <View style={styles.box2}>
                      <Text style={[styles.n3, { color: "#FF0000" }]}>
                        Kết thúc
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => setModalBuggy(true)}>
                      <View style={styles.box2}>
                        <Text style={[styles.n3, { color: "#30B153" }]}>
                          Đổi nhóm
                        </Text>
                        <Icon4
                          name="share"
                          size={16}
                          color="#30B153"
                          style={{ marginLeft: 3, marginTop: 2 }}
                        />
                      </View>
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
                          style={styles.modalContainer}
                          activeOpacity={1}
                        >
                          <TouchableOpacity
                            style={{ position: "absolute", top: 12, left: 10 }}
                            onPress={() => setModalBuggy(false)}
                          >
                            <Icon name="x" size={24} />
                          </TouchableOpacity>
                          <Text style={styles.buggy}>Đổi nhóm</Text>
                          <View style={styles.buggyline} />
                          <View style={styles.tk3}>
                            <View style={styles.tk2}>
                              <Text style={styles.tk4}>Chọn nhóm</Text>
                              <Icon
                                name="chevron-right"
                                size={20}
                                style={{ marginLeft: 7 }}
                              />
                            </View>
                          </View>
                          <View style={styles.tk}>
                            <View style={styles.tk21}>
                              <Text style={styles.tk41}>Quang (#213)</Text>
                              <View style={styles.tk22}>
                                <Text style={styles.tk42}>Chọn người chơi</Text>
                              </View>
                            </View>
                          </View>
                          <View style={styles.tk}>
                            <View style={styles.tk5}>
                              <Text style={{ color: "white" }}>Xác nhận</Text>
                            </View>
                            <View style={styles.tk6}>
                              <Text>Bỏ qua</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </Modal>
                  </View>
                </View>
              </View>
              {/* thông tin */}
              <View style={styles.infoBox}>
                <View style={styles.info}>
                  <TouchableOpacity
                    style={styles.checkboxContainer2}
                    onPress={handlePress}
                  >
                    <View
                      style={[
                        styles.checkbox22,
                        isChecked && styles.checkedBox,
                      ]}
                    >
                      {isChecked && (
                        <Icon
                          name="check"
                          size={18}
                          color="white"
                          style={styles.iconCheck}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.n2}>D.Q. Thais</Text>
                  <View style={styles.info}>
                    <View style={styles.box}>
                      <Text style={styles.n3}>drcd66</Text>
                      <Icon
                        name="user"
                        size={16}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.n3}>119</Text>
                      <Icon3
                        name="car-outline"
                        size={16}
                        color="#818181"
                        style={{ marginLeft: 3, marginTop: 2 }}
                      />
                    </View>
                    <View style={styles.box}>
                      <Text style={styles.n3}>0084</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* Diễn biến */}
          <Text style={styles.db3}>Diễn biến</Text>
          <View style={styles.db4}>
            {/* cột tích */}
            <View style={styles.db}>
              <View style={styles.db2}>
                <Icon name="check" size={20} color="white" />
              </View>
              <View style={styles.verticalLine} />
            </View>
            {/* bảng thời gian */}
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.holeContainer}>
                  <Text style={styles.holeText}>Hố: 1</Text>
                </View>
                <Text style={styles.cell3}>Time in</Text>
                <Text style={styles.cell4}>Time out</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell5}>Tee</Text>
                <Text style={styles.cell2}>06:39:09</Text>
                <Text style={styles.cell}>06:41:32</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell5}>Green</Text>
                <Text style={styles.cell2}>06:39:09</Text>
                <Text style={styles.cell}>06:41:32</Text>
              </View>
            </View>
          </View>
          <View style={styles.db4}>
            {/* cột tích */}
            <View style={styles.db}>
              <View style={styles.db5}>
                <Icon2 name="circle" size={22} color="#30B153" />
              </View>
              <View style={styles.verticalLine} />
            </View>
            {/* bảng thời gian */}
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.holeContainer}>
                  <Text style={styles.holeText}>Hố: 2</Text>
                </View>
                <Text style={styles.cell3}>Time in</Text>
                <Text style={styles.cell4}>Time out</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell5}>Tee</Text>
                <Text style={styles.cell2}>06:39:09</Text>
                <Text style={styles.cell}>06:41:32</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell5}>Green</Text>
                <Text style={styles.cell2}>06:39:09</Text>
                <Text style={styles.cell}>06:41:32</Text>
              </View>
            </View>
          </View>
          <View style={styles.db4}>
            {/* cột tích */}
            <View style={styles.db}>
              <View style={styles.db6}></View>
              <View style={styles.verticalLine} />
            </View>
            {/* bảng thời gian */}
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.holeContainer}>
                  <Text style={styles.holeText}>Hố: 3</Text>
                </View>
                <Text style={styles.cell3}>Time in</Text>
                <Text style={styles.cell4}>Time out</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell5}>Tee</Text>
                <Text style={styles.cell2}>06:39:09</Text>
                <Text style={styles.cell}>06:41:32</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell5}>Green</Text>
                <Text style={styles.cell2}>06:39:09</Text>
                <Text style={styles.cell}>06:41:32</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Đảm bảo cuộn được hết chiều dài nội dung
    paddingBottom: 100,
  },
  ct: {
    flex: 1, // Đảm bảo view chiếm toàn bộ không gian
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", // Thêm màu nền để dễ nhìn
  },
  image: {
    position: "absolute", // Đặt hình ảnh ở vị trí tuyệt đối
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%", // Đảm bảo hình ảnh lấp đầy chiều rộng
  },
  image2: {
    // position: "absolute", // Đặt hình ảnh ở vị trí tuyệt đối
    width: 40, // Đảm bảo hình ảnh lấp đầy chiều rộng
    height: 40, // Đảm bảo hình ảnh lấp đầy chiều cao
    borderRadius: 50,
    // marginLeft: 20,
  },
  gradient: {
    position: "absolute", // Đặt gradient ở vị trí tuyệt đối
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tt2: {
    backgroundColor: "white",
    borderRadius: 16,
    width: 361,
    height: 74,
    justifyContent: "center",
    flexDirection: "row", // Các thành phần nằm ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    paddingHorizontal: 20, // Đệm bên trái và bên phải
    position: "relative", // Đặt thành phần này theo vị trí tương đối
  },
  tt2Container: {
    // position: "absolute", // Đặt view nổi lên trên nội dung khác
    top: 90, // Khoảng cách từ đỉnh màn hình hoặc từ nơi bạn muốn nó xuất hiện
    left: 0,
    right: 0,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24, // Kích thước chữ
    fontWeight: "bold", // Đậm
    position: "absolute", // Đặt văn bản ở vị trí tuyệt đối
    bottom: 100, // Điều chỉnh vị trí của văn bản nếu cần
  },
  holes: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1, // Cho phép văn bản chiếm không gian còn lại
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
    shadowColor: "#000", // Màu sắc của bóng
    shadowOffset: {
      width: 0, // Độ dịch chuyển theo chiều ngang
      height: 2, // Độ dịch chuyển theo chiều dọc
    },
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 3.5, // Đường kính của bóng
    elevation: 5, // Độ cao bóng cho Android
  },
  ttht2: {
    color: "#20A1EA",
    paddingTop: 1,
    paddingRight: 6,
    paddingBottom: 1,
    paddingLeft: 6,
    marginLeft: "auto", // Căn sang bên phải
  },
  thaotac: {
    backgroundColor: "white",
    borderRadius: 16,
    width: 361,
    height: "auto",
    top: 10,
    shadowColor: "#000", // Màu sắc của bóng
    shadowOffset: {
      width: 0, // Độ dịch chuyển theo chiều ngang
      height: 2, // Độ dịch chuyển theo chiều dọc
    },
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 3.5, // Đường kính của bóng
    elevation: 5, // Độ cao bóng cho Android
  },
  thaotac2: {
    fontWeight: "bold",
    fontSize: 18,
  },
  thaotac3: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between", // Căn giữa các thành phần bên trái và phải
    alignItems: "center",
  },
  iconContainer: {
    width: 40, // Đặt chiều rộng cho icon container
    height: 40, // Đặt chiều cao cho icon container
    borderRadius: 20, // Bán kính góc để tạo hình tròn
    backgroundColor: "white", // Màu nền cho icon container
    justifyContent: "center", // Căn giữa nội dung theo chiều dọc
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
    shadowColor: "#000", // Màu sắc của bóng
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    color: "#30B153",
  },
  ficon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ftext: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text2: {
    borderWidth: 1,
    borderColor: "#30B153",
    backgroundColor: "#F0FCF1",
    borderRadius: 5,
    width: 100,
    height: 37,
    textAlign: "center", // Căn giữa văn bản theo chiều ngang
    lineHeight: 37,
    marginBottom: 12,
  },
  text3: {
    borderWidth: 1,
    borderColor: "#E40000",
    backgroundColor: "#FCF0F0",
    borderRadius: 5,
    width: "auto",
    height: 37,
    textAlign: "center", // Căn giữa văn bản theo chiều ngang
    lineHeight: 37,
    marginBottom: 12,
  },
  chitiet: {
    padding: 10,
  },
  chitiet2: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%", // Đảm bảo phần này chiếm toàn bộ chiều ngang
    marginTop: 40, // Khoảng cách phía trên
    alignItems: "flex-start",
  },
  chitiet3: {
    backgroundColor: "#F3F3F3",
    borderRadius: 16,
    width: 361,
    height: "auto",
    top: 10,
  },
  chitiet4: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chitiet5: {
    padding: 4,
    fontSize: 16,
  },
  chitiet6: {
    padding: 4,
    fontSize: 16,
    color: "#20A1EA",
  },
  ttk: {
    top: 30,
    width: 350,
  },
  ttk2: {
    flexDirection: "row", // Căn theo chiều ngang
    justifyContent: "space-between", // Đẩy hai bảng sang hai bên
  },
  ttk3: {
    flexDirection: "row", // Căn theo chiều ngang
    justifyContent: "space-between", // Đẩy hai bảng sang hai bên
    borderBottomWidth: 1, // Độ dày của đường gạch chân
    borderBottomColor: "#B9B9B9", // Màu sắc của đường gạch chân
    borderStyle: "dashed",
    paddingBottom: 10, // Khoảng cách dưới cùng của phần tử
    marginBottom: 10, // Khoảng cách giữa các mục ttk3
  },
  ttk4: {
    width: 160,
  },
  dsnc: {
    backgroundColor: "#50B748",
    borderRadius: 16,
    width: 361,
    height: "auto",
    top: 50,
    shadowColor: "#000", // Màu sắc của bóng
    shadowOffset: {
      width: 0, // Độ dịch chuyển theo chiều ngang
      height: 2, // Độ dịch chuyển theo chiều dọc
    },
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 3.5, // Đường kính của bóng
    elevation: 5, // Độ cao bóng cho Android
  },
  dsnc2: {
    flexDirection: "row",
    color: "white",
  },
  dsnc3: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  dsnc4: {
    color: "white",
    fontSize: 18,
  },
  //mới
  n2: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 20,
    // color: "#818181",
  },
  n3: {
    // color: "#818181",
  },
  infoBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FFFFFFA6", // Màu nền cho bảng thông tin
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
  // checkbox
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20, // Chiều rộng của ô tích
    height: 20, // Chiều cao của ô tích
    borderWidth: 1, // Độ dày của viền
    borderColor: "#818181", // Màu sắc của viền
    marginLeft: 3,
    borderRadius: 2,
    backgroundColor: "white",
    // justifyContent: "center",
    // // alignItems: "center",
    // backgroundColor: isChecked ? "#4CAF50" : "#fff", // Màu nền khi được tích
  },
  // chức năng
  infoBox2: {
    marginTop: 5,
    paddingLeft: 10,
    // backgroundColor: "#FFFFFFA6", // Màu nền cho bảng thông tin
    borderRadius: 5,
    width: "100%",
  },
  info2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 1,
  },
  box2: {
    padding: 5,
    backgroundColor: "#FFFFFFA6",
    borderRadius: 30,
    marginLeft: 5,
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
  },
  // checkbox2
  checkboxContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox2: {
    width: 20, // Chiều rộng của ô tích
    height: 20, // Chiều cao của ô tích
    borderWidth: 1, // Độ dày của viền
    borderColor: "white", // Màu sắc của viền
    marginLeft: 3,
    borderRadius: 2,
  },
  checkbox22: {
    width: 20, // Chiều rộng của ô tích
    height: 20, // Chiều cao của ô tích
    borderWidth: 1, // Độ dày của viền
    borderColor: "#818181", // Màu sắc của viền
    backgroundColor: "white",
    marginLeft: 3,
    borderRadius: 2,
  },
  // diễn biến
  db: {
    top: 20,
    alignSelf: "flex-start", // Đưa nó về bên trái
  },
  db2: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    borderColor: "#30B153",
    backgroundColor: "#30B153",
  },
  db3: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%", // Đảm bảo phần này chiếm toàn bộ chiều ngang
    marginTop: 75, // Khoảng cách phía trên
    alignItems: "flex-start",
  },
  verticalLine: {
    width: 5, // Độ rộng của đường thẳng
    height: 130, // Chiều dài của đường thẳng (bạn có thể điều chỉnh theo ý thích)
    backgroundColor: "#E4E4E4", // Màu của đường thẳng
    marginLeft: 10,
  },
  db4: {
    alignSelf: "flex-start", // Đưa nó về bên trái
    marginLeft: 10,
    flexDirection: "row",
  },
  db5: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 1,
    borderColor: "#30B153",
  },
  db6: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    borderColor: "#818181",
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4", // Màu sắc của đường gạch chân
    paddingBottom: 10, // Thêm khoảng cách dưới nội dung
  },
  row: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between", // Giữa các ô
    paddingVertical: 10, // Khoảng cách giữa các hàng
  },
  cell: {
    flex: 1, // Để ô chiếm đều không gian
    textAlign: "right", // Căn giữa văn bản
    fontSize: 16,
  },
  cell2: {
    flex: 1, // Để ô chiếm đều không gian
    textAlign: "center", // Căn giữa văn bản
    fontSize: 16,
  },
  cell3: {
    flex: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ABABAB",
    textAlign: "center",
    marginLeft: 15,
  },
  cell4: {
    flex: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ABABAB",
    textAlign: "right",
  },
  cell5: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  holeContainer: {
    borderColor: "#ABABAB", // Màu của đường viền
    borderWidth: 1, // Độ dày của đường viền
    borderRadius: 20, // Đường viền bo tròn góc
    marginRight: 3,
    width: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  holeText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#30B153",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Nền trong suốt tối
  },
  modalContainer: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 30,
    padding: 20,
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
    width: 140,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tk4: {
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tk5: {
    borderRadius: 5,
    backgroundColor: "#30B153",
    width: 140,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  tk6: {
    borderRadius: 5,
    backgroundColor: "#E5E4E4",
    width: 140,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
  },
  tk21: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ECECEC",
    width: "100%",
    height: "auto",
    padding: 10,
  },
  tk41: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tk22: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ECECEC",
    width: "100%",
    height: "auto",
    padding: 7,
    marginTop: 10,
    marginBottom: 15,
  },
  ghep2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#30B153",
    backgroundColor: "#F0FCF1",
    width: "100%",
    height: 37,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
  },
  gheplto: {
    width: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkedBox: {
    backgroundColor: "#30B153", // Màu nền khi checkbox được chọn
    borderRadius: 2, // Bo góc cho checkbox
    borderWidth: 0, // Ẩn đường viền khi checkbox được chọn
  },
  iconCheck: {
    position: "absolute", // Đặt icon theo vị trí tuyệt đối
    top: 1, // Điều chỉnh khoảng cách từ trên
    left: 1, // Điều chỉnh khoảng cách từ trái
    // Bạn có thể điều chỉnh giá trị top và left theo ý muốn
  },
});

export default ChiTiet;

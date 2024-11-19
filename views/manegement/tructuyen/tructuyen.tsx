import React, { useState } from "react";
import { Dimensions, Modal, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Ionicons";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const TrucTuyen = () => {
  const [inputText, setInputText] = useState("");
  const [isCar, setIsCar] = useState(false);

  const handlePress = () => {
    setIsCar(!isCar); // Đổi trạng thái màu khi bấm
  };

  const [modalBuggy, setModalBuggy] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={{ fontSize: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Xe trên sân: </Text>32
        </Text>
        {isTablet ? (
          <View style={styles.container3tl}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Tìm kiếm xe"
              placeholderTextColor="gray"
            />
            <Icon name="search" size={21} />
          </View>
        ) : (
          <View style={styles.container3}>
            <Icon name="search" size={21} />
          </View>
        )}
      </View>

      <View style={styles.numcar2}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              handlePress(); // Gọi hàm handlePress
              setModalBuggy(true); // Đặt modalBuggy thành true
            }}
          >
            <Text
              style={[
                styles.numcar,
                {
                  color: modalBuggy ? "white" : "black",
                  backgroundColor: modalBuggy ? "#30B153" : "transparent",
                  borderColor: modalBuggy ? "#30B153" : "black",
                },
              ]}
            >
              56
            </Text>
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
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <View style={styles.modalContainer2}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../../../image/70bd7a87c7db8e387a54446dfa3df8ca.png")}
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontWeight: "600",
                        }}
                      >
                        Xe 56
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Icon2 name="circle" size={8} color={"white"} />
                        <Text
                          style={{
                            color: "white",
                            marginLeft: 5,
                          }}
                        >
                          Đang phục vụ
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="phone-call" size={30} color={"#30B153"} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContainer3}
                activeOpacity={1}
              >
                <View>
                  <View style={styles.modalContainer4}>
                    <Text style={{ fontSize: 16 }}>LTO:</Text>
                    <Text style={{ fontSize: 16 }}>TO-21405140011</Text>
                  </View>
                  <View style={styles.modalContainer4}>
                    <Text style={{ fontSize: 16 }}>Thời gian nhanh/ chậm:</Text>
                    <Text style={{ fontSize: 16, color: "#20A1EA" }}>
                      00:32:00
                    </Text>
                  </View>
                  <View style={styles.modalContainer4}>
                    <Text style={{ fontSize: 16 }}>Người chơi:</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ fontSize: 16 }}>2</Text>
                      <TouchableOpacity onPress={toggleInfo}>
                        <Icon
                          name="chevron-right"
                          size={20}
                          color="#30B153"
                          style={{ marginLeft: 7 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {showInfo && (
                    <View style={styles.infoBox}>
                      {/* Hiển thị thông tin cố định của một người dùng */}
                      <View style={styles.info}>
                        <Text style={styles.n2}>Đ.Q. Thái</Text>
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
                            <Text style={styles.n3}>0084</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.info}>
                        <Text style={styles.n2}>Minh Quân</Text>
                        <View style={styles.info}>
                          <View style={styles.box}>
                            <Text style={styles.n3}>drcd22</Text>
                            <Icon
                              name="user"
                              size={16}
                              color="#818181"
                              style={{ marginLeft: 3, marginTop: 2 }}
                            />
                          </View>
                          <View style={styles.box}>
                            <Text style={styles.n3}>0085</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContainer5}
                activeOpacity={1}
              >
                <View>
                  <TouchableOpacity
                    // style={{ position: "absolute", top: 12, left: 10 }}
                    onPress={() => setModalBuggy(false)}
                  >
                    <Icon name="x" size={24} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </ScrollView>
      </View>

      <View style={styles.image}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={require("../../../image/bg-map 1.png")} />
        </ScrollView>
        <Text style={styles.numcar3}>56</Text>
        <Text style={styles.numcar4}>56</Text>
        <Text style={styles.numcar5}>56</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  container2: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container3: {
    backgroundColor: "#D8ECDA",
    borderRadius: 50,
    padding: 7,
  },
  container3tl: {
    backgroundColor: "#EAEAEA",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  modalOverlay: {
    flex: 1,
    marginTop: 115,
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Nền trong suốt tối
  },
  modalContainer: {
    backgroundColor: "#30B153",
    marginHorizontal: 20,
    borderRadius: 9,
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  modalContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalContainer3: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 9,
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginTop: 3,
  },
  modalContainer4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  modalContainer5: {
    marginTop: 3,
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-end",
    marginRight: 20,
    borderRadius: 5,
  },
  numcar: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  numcar2: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    marginTop: 200,
  },
  numcar3: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    backgroundColor: "white",
    position: "absolute",
    top: 120,
    left: 50,
  },
  numcar4: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    backgroundColor: "#20A1EA",
    color: "white",
    borderColor: "white",
    position: "absolute",
    top: 280,
    left: 80,
  },
  numcar5: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    backgroundColor: "#E40000",
    color: "white",
    borderColor: "white",
    position: "absolute",
    top: 200,
    left: 300,
  },
  n2: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#818181",
  },
  n3: {
    color: "#818181",
  },
  infoBox: {
    marginTop: 5,
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
});

export default TrucTuyen;

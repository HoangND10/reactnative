import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native"; // Import StyleSheet và View
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Ionicons";

const TaoLTO = () => {
  const [modalBuggy2, setModalBuggy2] = useState(false);

  const [inputText, setInputText] = useState("");
  const [time, setTime] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  // State để quản lý modal riêng biệt
  const [modalVisibleHoles, setModalVisibleHoles] = useState(false);
  const [modalVisiblePath, setModalVisiblePath] = useState(false);
  const [modalVisibleReturn, setModalVisibleReturn] = useState(false);
  const [modalCaddie, setModalCaddie] = useState(false);
  const [modalCar, setModalCar] = useState(false);
  const [modalBagTag, setModalBagTag] = useState(false);
  const [modalBuggy, setModalBuggy] = useState(false);

  const [selectedHoles, setSelectedHoles] = useState("Chọn số hố");
  const [selectedPath, setSelectedPath] = useState("Chọn đường đi");
  const [selectedReturn, setSelectedReturn] = useState("Chọn đường về");
  const [selectedCaddie, setSelectedCaddie] = useState("Chọn Caddie");
  const [selectedCar, setSelectedCar] = useState("Chọn Car");
  const [selectedBagTag, setSelectedBagTag] = useState("Nhập số thẻ");
  const [selectedBuggy, setSelectedBuggy] = useState("Chọn Buggy");

  const options = ["Hố A", "Hố B", "Hố C"];
  const options2 = ["Đường A", "Đường B", "Đường C"];
  const options3 = ["Caddie A", "Caddie B", "Caddie C"];
  const options4 = ["Car A", "Car B", "Car C"];
  const options5 = ["Thẻ A", "Thẻ B", "Thẻ C"];
  const options6 = ["38", "38", "27"];

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    setTime(
      `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
    );
    setShowPicker(false);
  };

  const selectOption = (value, setSelectedValue, setModalVisible) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked); // Thay đổi trạng thái khi nhấn vào ô tích
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* thông tin chung */}
        <Text style={styles.tt}>Thông tin chung</Text>
        {/* thời gian */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Tee-time <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              {/* TextInput cho phép người dùng nhập thời gian */}
              <TextInput
                style={{ fontSize: 16 }} // Kiểu chữ cho TextInput
                value={time} // Hiển thị giá trị thời gian đã lưu trong state
                onChangeText={setTime} // Cập nhật state khi người dùng nhập thời gian
                placeholder="Nhập thời gian" // Hiển thị hướng dẫn nếu không có dữ liệu
                keyboardType="numeric" // Thiết lập bàn phím số để nhập giờ
              />
              {/* TouchableOpacity giúp nhận sự kiện khi người dùng bấm vào biểu tượng */}
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                {/* Icon lịch, khi nhấn sẽ hiển thị DateTimePicker */}
                <Icon name="calendar" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* DateTimePicker xuất hiện khi showPicker = true */}
          {showPicker && (
            <DateTimePicker
              value={new Date()} // Giá trị mặc định của DateTimePicker (hiện tại là thời gian hiện tại)
              mode="time" // Chế độ chọn giờ (thay vì chọn ngày)
              is24Hour={true} // Định dạng 24 giờ (thay vì AM/PM)
              display="default" // Giao diện mặc định của bộ chọn thời gian
              onChange={onTimeChange} // Gọi hàm onTimeChange khi người dùng chọn thời gian
            />
          )}
        </View>
        {/* số người chơi */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Số người chơi <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <TextInput
                style={{ fontSize: 16 }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Chọn đường đi"
                placeholderTextColor="#ACACAC"
              ></TextInput>
            </View>
          </View>
        </View>
        {/* Số hố chơi */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Số hố chơi <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedHoles === "Chọn số hố" ? "#ACACAC" : "#000",
                }}
              >
                {selectedHoles}
              </Text>
              <TouchableOpacity onPress={() => setModalVisibleHoles(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Số hố chơi */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisibleHoles}
            onRequestClose={() => setModalVisibleHoles(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalVisibleHoles(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(
                          item,
                          setSelectedHoles,
                          setModalVisibleHoles
                        )
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* Đường đi */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Đường đi</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedPath === "Chọn đường đi" ? "#ACACAC" : "#000",
                }}
              >
                {selectedPath}
              </Text>
              <TouchableOpacity onPress={() => setModalVisiblePath(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Đường đi */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisiblePath}
            onRequestClose={() => setModalVisiblePath(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalVisiblePath(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options2}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(item, setSelectedPath, setModalVisiblePath)
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* Đường về */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Đường về</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color:
                    selectedReturn === "Chọn đường về" ? "#ACACAC" : "#000",
                }}
              >
                {selectedReturn}
              </Text>
              <TouchableOpacity onPress={() => setModalVisibleReturn(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Đường về */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisibleReturn}
            onRequestClose={() => setModalVisibleReturn(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalVisibleReturn(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options2}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(
                          item,
                          setSelectedReturn,
                          setModalVisibleReturn
                        )
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* hố bắt đầu */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Hố bắt đầu</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedHoles === "Chọn số hố" ? "#ACACAC" : "#000",
                }}
              >
                {selectedHoles}
              </Text>
              <TouchableOpacity onPress={() => setModalVisibleHoles(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Số hố chơi */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisibleHoles}
            onRequestClose={() => setModalVisibleHoles(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalVisibleHoles(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(
                          item,
                          setSelectedHoles,
                          setModalVisibleHoles
                        )
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* danh sách người chơi */}
        <View style={styles.tt8}>
          <Text style={styles.tt7}>Danh sách người chơi</Text>
          <View style={styles.tt9}>
            <Text style={styles.tt10}>0</Text>
          </View>
          <TouchableOpacity
            onPress={() => setModalBuggy2(true)}
            style={styles.tt11}
          >
            <Text style={{ color: "#E40000" }}>+ Thêm người chơi</Text>
          </TouchableOpacity>
          {/* Bảng thêm người chơi */}
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
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 15,
                    top: 13,
                  }}
                  onPress={() => setModalBuggy2(false)}
                >
                  <Icon name="x" size={28} />
                </TouchableOpacity>
                <Text style={styles.cnc}>Thêm người chơi</Text>
                <View style={styles.buggyline} />
                <Text style={styles.cnc2}>Chọn người chơi:</Text>
                <View style={styles.cnc3}>
                  <View style={styles.cnc4}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>
                      2568
                    </Text>
                    <TouchableOpacity style={styles.closeIconContainer}>
                      <Icon name="x" size={14} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cnc5}>
                    <Icon3 name="qr-code-scanner" size={24} />
                  </View>
                </View>
                <View style={styles.cnc6}>
                  <View style={styles.cnc7}>
                    <TouchableOpacity
                      style={styles.checkboxContainer2}
                      onPress={handlePress}
                    >
                      <View
                        style={[
                          styles.checkbox2,
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
                    <View>
                      <Text style={{ fontSize: 16 }}>
                        <Text style={{ fontWeight: "700" }}>2568</Text> - Nguyễn
                        Duy Bắc
                      </Text>
                      <View style={styles.info}>
                        <View style={styles.box}>
                          <Text style={styles.time}>drcd66</Text>
                          <Icon
                            name="user"
                            size={15}
                            color="#818181"
                            style={{ marginLeft: 3, marginTop: 2 }}
                          />
                        </View>
                        <View style={styles.box}>
                          <Text style={styles.time}>119</Text>
                          <Icon4
                            name="car-outline"
                            size={15}
                            color="#818181"
                            style={{ marginLeft: 3, marginTop: 2 }}
                          />
                        </View>
                        <View style={styles.box}>
                          <Icon
                            name="clock"
                            size={15}
                            color="#818181"
                            style={{ marginLeft: 3, marginTop: 2 }}
                          />
                          <Text style={styles.time}>07:30 - 11:00</Text>
                        </View>
                      </View>
                    </View>
                    <Icon name="alert-circle" size={28} />
                  </View>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* họ và tên */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Họ và tên <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <TextInput
                style={{ fontSize: 16 }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Nhập tên người chơi"
                placeholderTextColor="#ACACAC"
              ></TextInput>
            </View>
          </View>
        </View>
        {/* số điện thoại */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Điện thoại</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <TextInput
                style={{ fontSize: 16 }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Số điện thoại"
                placeholderTextColor="#ACACAC"
              ></TextInput>
            </View>
          </View>
        </View>
        {/* caddie */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Caddie <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedCaddie === "Chọn Caddie" ? "#ACACAC" : "#000",
                }}
              >
                {selectedCaddie}
              </Text>
              <TouchableOpacity onPress={() => setModalCaddie(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Số hố chơi */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalCaddie}
            onRequestClose={() => setModalCaddie(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalCaddie(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options3}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(item, setSelectedCaddie, setModalCaddie)
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* buggy */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Buggy <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedBuggy === "Chọn Buggy" ? "#ACACAC" : "#000",
                }}
              >
                {selectedBuggy}
              </Text>
              <TouchableOpacity onPress={() => setModalBuggy(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Số hố chơi */}
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
                <TouchableOpacity
                  style={{ position: "absolute", top: 12, left: 10 }}
                  onPress={() => setModalBuggy(false)}
                >
                  <Icon name="x" size={24} />
                </TouchableOpacity>
                <Text style={styles.buggy}>Chọn Buggy</Text>
                <View style={styles.buggyline} />
                <View style={styles.tt12}>
                  <View style={styles.tt13}>
                    <Icon2 name="search1" size={24} color={"#ACACAC"} />
                    <TextInput
                      style={{ fontSize: 16, left: 5 }}
                      value={inputText}
                      onChangeText={setInputText}
                      placeholder="Nhập"
                      placeholderTextColor="#ACACAC"
                    ></TextInput>
                  </View>
                </View>
                <FlatList
                  data={options6}
                  keyExtractor={(item, index) => `${item}-${index}`}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(item, setSelectedBuggy, setModalBuggy)
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* chọn xe */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Chọn xe</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedCar === "Chọn Car" ? "#ACACAC" : "#000",
                }}
              >
                {selectedCar}
              </Text>
              <TouchableOpacity onPress={() => setModalCar(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Số hố chơi */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalCar}
            onRequestClose={() => setModalCar(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalCar(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options4}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(item, setSelectedCar, setModalCar)
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* ngôn ngữ xe */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Ngôn ngữ xe</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <TextInput
                style={{ fontSize: 16 }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Ngôn ngữ xe"
                placeholderTextColor="#ACACAC"
              ></TextInput>
            </View>
          </View>
        </View>
        {/* bagtag */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>
            Bagtag <Text style={styles.tt4}>*</Text>
          </Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <Text
                style={{
                  fontSize: 16,
                  color: selectedBagTag === "Nhập số thẻ" ? "#ACACAC" : "#000",
                }}
              >
                {selectedBagTag}
              </Text>
              <TouchableOpacity onPress={() => setModalBagTag(true)}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal cho Số hố chơi */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={modalBagTag}
            onRequestClose={() => setModalBagTag(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              onPressOut={() => setModalBagTag(false)}
            >
              <TouchableOpacity style={styles.modalContainer} activeOpacity={1}>
                <FlatList
                  data={options5}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() =>
                        selectOption(item, setSelectedBagTag, setModalBagTag)
                      }
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* key tủ đồ */}
        <View style={styles.tt2}>
          <Text style={styles.tt3}>Key tủ đồ</Text>
          <View style={styles.tt5}>
            <View style={styles.tt6}>
              <TextInput
                style={{ fontSize: 16 }}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Nhập key"
                placeholderTextColor="#ACACAC"
              ></TextInput>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "white", // Nền trắng cho ScrollView
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  tt: {
    fontSize: 20,
    fontWeight: "600",
  },
  tt2: {
    marginTop: 5,
  },
  tt3: {
    fontWeight: "700",
    fontSize: 16,
  },
  tt4: { color: "#FA0808" },
  tt5: {
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
    marginTop: 10,
    marginBottom: 20,
  },
  tt6: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  tt7: {
    fontSize: 18,
    fontWeight: "600",
  },
  tt8: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  tt9: {
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: "#ECECEC",
    marginLeft: 5,
  },
  tt10: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  tt11: {
    flex: 1, // Đảm bảo phần tử chiếm hết chiều ngang có thể
    flexDirection: "row",
    justifyContent: "flex-end", // Căn chữ sang phải
    marginTop: 4,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Căn giữa theo chiều ngang
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền trong suốt tối
  },
  modalContainer: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    width: "95%",
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
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
  cnc: {
    fontWeight: "600",
    fontSize: 20,
    alignItems: "center",
    top: -7,
  },
  cnc2: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "700",
    color: "gray",
  },
  cnc3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cnc4: {
    backgroundColor: "#D8ECDA",
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  cnc5: {
    borderWidth: 1,
    backgroundColor: "#D8ECDA",
    padding: 5,
    borderRadius: 5,
    borderColor: "#30B153",
  },
  cnc6: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 5,
    marginTop: 15,
  },
  cnc7: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 1,
    marginLeft: -5,
  },
  box: {
    padding: 5,
    backgroundColor: "#EAEAEA",
    borderRadius: 3,
    marginLeft: 5,
    flexDirection: "row",
  },
  time: {
    marginLeft: 5,
    fontSize: 13,
  },
  checkboxContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox2: {
    width: 20, // Chiều rộng của ô tích
    height: 20, // Chiều cao của ô tích
    borderWidth: 1, // Độ dày của viền
    borderColor: "#818181", // Màu sắc của viền
    marginLeft: 3,
    borderRadius: 2,
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
  closeIconContainer: {
    position: "absolute", // Đặt vị trí tuyệt đối để di chuyển vào góc
    top: -8, // Điều chỉnh vị trí dấu X lên trên
    right: -8, // Điều chỉnh vị trí dấu X sang bên phải
    backgroundColor: "white", // Màu nền cho dấu X
    borderRadius: 10, // Bo tròn dấu X
    borderWidth: 2, // Độ dày viền trắng
    borderColor: "white", // Màu viền trắng
    width: 20, // Kích thước của container dấu X
    height: 20, // Kích thước của container dấu X
    justifyContent: "center", // Căn giữa dấu X theo chiều dọc
    alignItems: "center", // Căn giữa dấu X theo chiều ngang
    elevation: 5,
  },
});

export default TaoLTO;

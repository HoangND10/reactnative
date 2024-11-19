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
  Dimensions,
} from "react-native"; // Import StyleSheet và View
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const SuaLTO = () => {
  const [time, setTime] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  // State để quản lý modal riêng biệt
  const [modalVisibleHoles, setModalVisibleHoles] = useState(false);
  const [modalVisiblePath, setModalVisiblePath] = useState(false);
  const [modalVisibleReturn, setModalVisibleReturn] = useState(false);

  const [selectedHoles, setSelectedHoles] = useState("Chọn số hố");
  const [selectedPath, setSelectedPath] = useState("Chọn đường đi");
  const [selectedReturn, setSelectedReturn] = useState("Chọn đường về");

  const options = ["Hố A", "Hố B", "Hố C"];
  const options2 = ["Đường A", "Đường B", "Đường C"];

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
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        {/* thông tin chung */}
        <Text style={styles.tt}>TO-21405140011</Text>
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
              <TouchableOpacity
                style={
                  isTablet ? styles.modalContainertl : styles.modalContainer
                }
                activeOpacity={1}
              >
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
              <TouchableOpacity
                style={
                  isTablet ? styles.modalContainertl : styles.modalContainer
                }
                activeOpacity={1}
              >
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
              <TouchableOpacity
                style={
                  isTablet ? styles.modalContainertl : styles.modalContainer
                }
                activeOpacity={1}
              >
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
              <TouchableOpacity
                style={
                  isTablet ? styles.modalContainertl : styles.modalContainer
                }
                activeOpacity={1}
              >
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  tt: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền trong suốt tối
  },
  modalContainer: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
  },
  modalContainertl: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    width: 500,
    alignSelf: "center",
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
  },
});

export default SuaLTO;

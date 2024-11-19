import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native"; // Import StyleSheet và View
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Feather";
import Lto2 from "./lto";
import Caddie2 from "./caddie";
import { Modal } from "react-native";

// Lấy kích thước màn hình hiện tại
const { width, height } = Dimensions.get("window");

// Kiểm tra thiết bị có phải iPad không
const isTablet = width >= 768;

const initialLayout = { width: Dimensions.get("window").width };

const Day = ({ setModalBuggy, onApply }) => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const increaseMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const decreaseMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // Lấy số ngày trong tháng và tháng trước
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate();

  // Lấy ngày đầu tiên của tháng để tính ngày bắt đầu
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  // Mảng các ngày trong tuần
  const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  // Tạo danh sách các ngày trong tháng và thêm các ngày của tháng trước
  const daysArray = [];
  const startEmptyDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Thêm các ngày của tháng trước
  for (
    let i = daysInPrevMonth - startEmptyDays + 1;
    i <= daysInPrevMonth;
    i++
  ) {
    daysArray.push({ day: i, isCurrentMonth: false });
  }

  // Thêm các ngày của tháng hiện tại
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push({ day: i, isCurrentMonth: true });
  }

  // Thêm các ngày của tháng sau để lấp đầy tuần
  const remainingDays = 42 - daysArray.length;
  for (let i = 1; i <= remainingDays; i++) {
    daysArray.push({ day: i, isCurrentMonth: false });
  }

  return (
    <View>
      {/* Điều chỉnh tháng */}
      <View style={styles.container3}>
        <TouchableOpacity onPress={decreaseMonth}>
          <Icon name="chevron-left" size={20} color="#818181" />
        </TouchableOpacity>
        <Text style={styles.text}>
          Tháng {month} - {year}
        </Text>
        <TouchableOpacity onPress={increaseMonth}>
          <Icon name="chevron-right" size={20} color="#818181" />
        </TouchableOpacity>
      </View>

      {/* Hiển thị các ngày trong tuần */}
      <View style={isTablet ? styles.weekHeadertl : styles.weekHeader}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* Hiển thị các ngày trong tháng */}
      <View style={styles.daysContainer}>
        {daysArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayBox,
              selectedDay === item.day &&
                item.isCurrentMonth &&
                styles.selectedDayBox,
            ]}
            onPress={() => item.isCurrentMonth && setSelectedDay(item.day)}
          >
            <Text
              style={[
                styles.dayText,
                !item.isCurrentMonth && styles.otherMonthDayText, // Ngày không thuộc tháng hiện tại sẽ có màu khác
                selectedDay === item.day &&
                  item.isCurrentMonth &&
                  styles.selectedDayText,
              ]}
            >
              {item.day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dx4}>
        <TouchableOpacity
          style={styles.dx2}
          onPress={() => setModalBuggy(false)}
        >
          <View>
            <Text style={{ fontSize: 16 }}>Bỏ qua</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onApply(selectedDay, month, year); // Gọi hàm onApply để truyền ngày đã chọn
            setModalBuggy(false); // Đóng modal
          }}
          style={styles.dx3}
        >
          <View>
            <Text style={{ fontSize: 16, color: "#30B153" }}>Áp dụng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Month = ({ setModalBuggy, onApply }) => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

  const increaseYear = () => {
    setYear(year + 1);
  };

  const decreaseYear = () => {
    setYear(year - 1);
  };

  // Mảng các tháng từ 1 đến 12
  const monthsArray = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  // Chia mảng thành hai phần
  const firstHalfMonths = monthsArray.slice(0, 6); // Các tháng 1-6
  const secondHalfMonths = monthsArray.slice(6); // Các tháng 7-12

  return (
    <View>
      {/* Điều chỉnh năm */}
      <View style={styles.container3}>
        <TouchableOpacity onPress={decreaseYear}>
          <Icon name="chevron-left" size={20} color="#818181" />
        </TouchableOpacity>
        <Text style={styles.text}>Năm {year}</Text>
        <TouchableOpacity onPress={increaseYear}>
          <Icon name="chevron-right" size={20} color="#818181" />
        </TouchableOpacity>
      </View>

      {/* Hiển thị các tháng */}
      <View style={styles.monthsContainer}>
        {/* Cột đầu tiên (Tháng 1-6) */}
        <View style={styles.column}>
          {firstHalfMonths.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.monthBox,
                selectedMonth === index && styles.selectedMonthBox,
              ]}
              onPress={() => setSelectedMonth(index)}
            >
              <Text
                style={[
                  styles.monthText,
                  selectedMonth === index && styles.selectedMonthText,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cột thứ hai (Tháng 7-12) */}
        <View style={styles.column}>
          {secondHalfMonths.map((month, index) => (
            <TouchableOpacity
              key={index + 6} // Cộng 6 để duy trì chỉ số đúng
              style={[
                styles.monthBox,
                selectedMonth === index + 6 && styles.selectedMonthBox,
              ]}
              onPress={() => setSelectedMonth(index + 6)}
            >
              <Text
                style={[
                  styles.monthText,
                  selectedMonth === index + 6 && styles.selectedMonthText,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.dx4}>
        <TouchableOpacity
          style={styles.dx2}
          onPress={() => setModalBuggy(false)}
        >
          <View>
            <Text style={{ fontSize: 16 }}>Bỏ qua</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onApply(selectedMonth, year)}
          style={styles.dx3}
        >
          <View>
            <Text style={{ fontSize: 16, color: "#30B153" }}>Áp dụng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BaoCao = ({ route }) => {
  const currentDate = new Date();
  const [modalBuggy, setModalBuggy] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "lto", title: "LTO" },
    { key: "caddie", title: "Caddie" },
  ]);

  const renderScene = SceneMap({
    lto: Lto2,
    caddie: Caddie2,
  });

  const [index2, setIndex2] = useState(0); // Thêm index cho tab thứ hai
  const [routes2] = useState([
    { key: "day", title: "Ngày" },
    { key: "month", title: "Tháng" },
  ]);

  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate()); // Thêm state để lưu ngày đã chọn

  const handleApply = (selectedDay, selectedMonth, selectedYear) => {
    if (selectedDay !== null && selectedDay !== undefined) {
      setSelectedDay(selectedDay); // Cập nhật ngày
    }
    if (selectedMonth !== null && selectedMonth !== undefined) {
      setMonth(selectedMonth + 1); // Cập nhật tháng
    }
    if (selectedYear !== null && selectedYear !== undefined) {
      setYear(selectedYear); // Cập nhật năm
    }
  };

  const renderScene2 = ({ route }) => {
    switch (route.key) {
      case "day":
        return (
          <Day
            setModalBuggy={setModalBuggy}
            onApply={(selectedDay, selectedMonth, selectedYear) =>
              handleApply(selectedDay, selectedMonth - 1, selectedYear)
            }
          />
        );
      case "month":
        return (
          <Month
            setModalBuggy={setModalBuggy}
            onApply={(selectedMonth, selectedYear) =>
              handleApply(null, selectedMonth, selectedYear)
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Báo cáo - Thống kê</Text>
      </View>
      <View style={styles.container2}>
        {/* tabview lto caddie */}
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={styles.tabBar}
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
                      { color: focused ? "white" : "black" }, // Đổi màu chữ khi được chọn
                    ]}
                  >
                    {route.title}
                  </Text>
                </View>
              )}
            />
          )}
        />
        <View style={styles.lich}>
          <Text style={styles.lich2}>
            <Text style={{ fontWeight: "bold" }}>
              {index2 === 0
                ? selectedDay
                  ? `${selectedDay}, Tháng ${month}, ${year}`
                  : `Tháng ${month}, ${year}`
                : `Tháng ${month}, ${year}`}{" "}
              {/* Hiển thị chỉ tháng và năm nếu chọn tab "Tháng" */}
            </Text>
          </Text>

          <TouchableOpacity onPress={() => setModalBuggy(true)}>
            <Icon
              name={"chevron-down"}
              size={28}
              color={"#30B153"}
              marginTop={-2}
              paddingLeft={5}
            />
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
                  isTablet ? styles.modalContainertl : styles.modalContainer
                }
                activeOpacity={1}
              >
                <View style={styles.rowContainer}>
                  {/* Xem theo text */}
                  <Text style={styles.dx}>Xem theo:</Text>

                  {/* tabview ngày tháng */}
                  <TabView
                    navigationState={{ index: index2, routes: routes2 }}
                    renderScene={renderScene2}
                    onIndexChange={setIndex2}
                    initialLayout={initialLayout}
                    renderTabBar={(props) => (
                      <TabBar
                        {...props}
                        style={styles.tabBar2}
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
                                { color: focused ? "white" : "black" }, // Đổi màu chữ khi được chọn
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

                {/* Nội dung TabView ở phía dưới */}
                <View style={styles.contentContainer}>
                  {renderScene2({ route: routes2[index2] })}
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container2: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FAFBFD",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  header: {
    backgroundColor: "#50B648", // Đổi màu tại đây (ví dụ: màu xanh lá cây)
    height: 100, // Điều chỉnh chiều cao của header
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerText: {
    color: "#FFFFFF", // Màu chữ trắng
    fontSize: 20, // Kích thước chữ
    fontWeight: "bold", // Chữ đậm
    marginBottom: 10,
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#E8E8E8",
    borderRadius: 60, // Bo góc cho phần thanh Tab
    marginHorizontal: 15, // Khoảng cách hai bên
    borderWidth: 1,
    borderColor: "#ECECEC",
    justifyContent: "space-between", // Căn giữa các tab với khoảng cách đều
    paddingBottom: 3,
    height: 45, // Chiều cao của TabBar
    marginTop: 15,
    width: 175,
  },
  tabBar2: {
    backgroundColor: "#E8E8E8",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#ECECEC",
    justifyContent: "space-between",
    height: 45,
    width: 175,
    alignSelf: "flex-end", // Căn sát bên phải
    marginRight: 3,
  },
  tabContainer: {
    justifyContent: "center", // Đảm bảo chữ nằm giữa theo chiều dọc
    alignItems: "center", // Căn giữa chữ theo chiều ngang
    height: 35, // Chiều cao tổng cộng của container
    width: 80, // Cố định chiều rộng của tabContainer
    borderRadius: 30, // Bo góc của container bao quanh chữ
    top: -6,
  },
  selectedTab: {
    backgroundColor: "#51B748", // Màu nền của tab khi được chọn
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lich: {
    marginTop: 30,
    marginRight: 15,
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
  lich2: {
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
    borderRadius: 19,
    padding: 30,
  },
  modalContainertl: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 19,
    padding: 30,
    width: 500,
    alignSelf: "center",
  },
  dx: {
    fontSize: 16,
    fontWeight: "400",
  },
  dx2: {
    backgroundColor: "#D6D8D9",
    borderWidth: 1,
    borderColor: "#9EA2A5",
    borderRadius: 6,
    padding: 9,
    alignItems: "center",
    width: "48%",
  },
  dx3: {
    backgroundColor: "#D8ECDA",
    borderWidth: 1,
    borderColor: "#30B153",
    borderRadius: 6,
    padding: 9,
    alignItems: "center",
    width: "48%",
  },
  dx4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Căn đều giữa các thành phần trong hàng ngang
  },
  contentContainer: {
    marginTop: 10, // Khoảng cách giữa TabView và nội dung bên dưới
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 15,
    paddingHorizontal: 3,
  },
  weekHeadertl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  weekDay: {
    fontSize: 11,
    width: 30,
    textAlign: "center",
    color: "#333",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dayBox: {
    width: "13%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 4,
    // backgroundColor: "#ECECEC",
  },
  selectedDayBox: {
    backgroundColor: "#D8ECDA",
  },
  dayText: {
    fontSize: 14,
    color: "#000",
  },
  selectedDayText: {},
  otherMonthDayText: {
    color: "grey",
  },
  monthBox: {
    width: "91%", // Chiều rộng của mỗi ô tháng
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D6D8D9",
  },
  selectedMonthBox: {
    backgroundColor: "#D8ECDA",
    borderColor: "#D8ECDA",
  },
  monthText: {
    fontSize: 14,
    color: "#000",
  },
  selectedMonthText: {},
  monthsContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Căn đều giữa hai cột
    marginTop: 20,
  },
  column: {
    flex: 1, // Chiếm đều không gian trong mỗi cột
    alignItems: "center", // Căn giữa các tháng trong cột
  },
});

export default BaoCao;

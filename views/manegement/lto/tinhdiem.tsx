import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Table, Row } from "react-native-table-component";
import Icon from "react-native-vector-icons/Feather";

const TinhDiem = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const tableHead = ["Hố", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Out"];
  const tableData = [
    ["Interval time", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
    ["Total time", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
    ["Black", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
    ["Par", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
    ["Gross", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
    ["Over", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
    ["Stroke index", "1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30"],
  ];
  const tableHead2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Out",
    "Total",
  ];
  const tableData2 = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "12h30", "12h30"],
  ];
  const tableHead3 = [
    "-1 Birdie",
    "0 Par",
    "+1 Bogey",
    "+2 Double",
    "+3 Triple",
    "-2",
    "+4",
    "+5",
    "+6",
    <Icon name="more-horizontal" size={24} style={{ alignSelf: "center" }} />,
  ];
  const [selectedOption2, setSelectedOption2] = useState("over"); // Default is "over"

  const handlePress = (option) => {
    setSelectedOption2(option); // Set the clicked option as selected
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.code}>
          <Text
            style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 5 }}
          >
            240527199001
          </Text>
        </View>
        <View style={styles.option}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Nguyễn Văn A" value="option1" />
            <Picker.Item label="Nguyễn Văn B" value="option2" />
            <Picker.Item label="Nguyễn Văn C" value="option3" />
          </Picker>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <View style={styles.container5}>
              <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                    Người chơi:
                  </Text>
                  Nguyễn Văn A
                </Text>
                <Text style={{ fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                    Số điện thoại:
                  </Text>
                  0123456789
                </Text>
                <Text style={{ fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                    Teetime:
                  </Text>
                  5 phút
                </Text>
                <Text style={{ fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                    Date:{" "}
                  </Text>
                  01/10/2024
                </Text>
                <Text style={{ fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                    Caddie:{" "}
                  </Text>
                  Nguyễn Văn B
                </Text>
              </View>
              <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
                <Text style={styles.luu}>Lưu</Text>
              </View>
            </View>
            <View style={styles.container6}>
              <Table
                borderStyle={{
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                <Row
                  data={tableHead}
                  style={{ height: 35, backgroundColor: "#30B153" }}
                  textStyle={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  widthArr={[104, 44, 44, 44, 44, 44, 44, 44, 44, 44, 54]} // Thiết lập độ rộng cho từng cột
                />
                {tableData.map((rowData, rowIndex) => (
                  <Row
                    key={rowIndex}
                    data={rowData.map((cellData, colIndex) => {
                      let cellStyle = {
                        textAlign: "center",
                        paddingVertical: 5,
                      };
                      if (rowIndex === 2) {
                        cellStyle = { ...cellStyle, color: "white" };
                      }
                      if (rowIndex === 6) {
                        cellStyle = {
                          ...cellStyle,
                          fontWeight: "700",
                        };
                      }
                      if (rowIndex === 5 && colIndex === 5) {
                        cellStyle = {
                          ...cellStyle,
                          backgroundColor: "red",
                          color: "white",
                        };
                      }

                      return (
                        <Text key={colIndex} style={cellStyle}>
                          {cellData}
                        </Text>
                      );
                    })}
                    style={[
                      styles.row,
                      rowIndex === 2 && styles.specialRow, // Dòng thứ 3
                      rowIndex === 5 && { backgroundColor: "#C4CACE" },
                    ]}
                    widthArr={[104, 44, 44, 44, 44, 44, 44, 44, 44, 44, 54]}
                  />
                ))}
              </Table>
              <Table
                borderStyle={{
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                <Row
                  data={tableHead2}
                  style={{ height: 35, backgroundColor: "#30B153" }}
                  textStyle={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  widthArr={[44, 44, 44, 44, 44, 44, 44, 44, 44, 54, 54]} // Thiết lập độ rộng cho từng cột
                />
                {tableData2.map((rowData, rowIndex) => (
                  <Row
                    key={rowIndex}
                    data={rowData.map((cellData, colIndex) => {
                      let cellStyle = {
                        textAlign: "center",
                        paddingVertical: 5,
                      };
                      if (rowIndex === 2) {
                        cellStyle = { ...cellStyle, color: "white" };
                      }
                      if (rowIndex === 6) {
                        cellStyle = {
                          ...cellStyle,
                          fontWeight: "700",
                        };
                      }
                      if (rowIndex === 5 && colIndex === 5) {
                        cellStyle = {
                          ...cellStyle,
                          backgroundColor: "red",
                          color: "white",
                        };
                      }

                      return (
                        <Text key={colIndex} style={cellStyle}>
                          {cellData}
                        </Text>
                      );
                    })}
                    style={[
                      styles.row,
                      rowIndex === 2 && styles.specialRow, // Dòng thứ 3
                      rowIndex === 5 && { backgroundColor: "#C4CACE" },
                    ]}
                    widthArr={[44, 44, 44, 44, 44, 44, 44, 44, 44, 54, 54]}
                  />
                ))}
              </Table>
            </View>
          </View>
          <View style={styles.container7}>
            <TouchableOpacity
              style={[
                styles.over,
                selectedOption2 === "over" && styles.selectedButton,
              ]}
              onPress={() => handlePress("over")}
            >
              <Text style={[selectedOption2 === "over" && styles.selectedText]}>
                Over
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.gross,
                selectedOption2 === "gross" && styles.selectedButton,
              ]}
              onPress={() => handlePress("gross")}
            >
              <Text
                style={[selectedOption2 === "gross" && styles.selectedText]}
              >
                Gross
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 50, alignItems: "center" }}>
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor: "gray",
              }}
            >
              <Row
                data={tableHead3}
                style={{ height: 60, backgroundColor: "white" }}
                textStyle={{
                  textAlign: "center",
                }}
                widthArr={[70, 70, 70, 70, 70, 70, 70, 70, 70, 70]} // Thiết lập độ rộng cho từng cột
              />
            </Table>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo container chiếm toàn bộ không gian
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 15,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    // flex: 1,
    backgroundColor: "#ECECEC",
  },
  container4: {
    backgroundColor: "white",
    borderRadius: 9,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "column",
    marginBottom: 50,
  },
  container5: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container6: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -25,
  },
  container7: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: -30,
  },
  code: {
    backgroundColor: "#D8ECDA",
    alignSelf: "flex-start",
    borderRadius: 20,
    marginVertical: 25,
    marginHorizontal: 40,
  },
  picker: {
    width: 200,
  },
  option: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D7D7D7",
    height: 40,
    justifyContent: "center",
    marginLeft: -20,
  },
  luu: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: "#30B153",
    color: "white",
    borderRadius: 5,
    fontSize: 14,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 210,
    backgroundColor: "#ECECEC",
  },
  row: {
    backgroundColor: "#ECECEC",
  },
  specialRow: {
    backgroundColor: "#444444", // Màu riêng cho dòng đặc biệt
  },
  over: {
    borderWidth: 1,
    borderColor: "#30B153",
    alignSelf: "center",
    width: 70,
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  gross: {
    borderWidth: 1,
    borderColor: "#30B153",
    alignSelf: "center",
    width: 70,
    height: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#30B153",
  },

  selectedText: {
    color: "white",
  },
});

export default TinhDiem;

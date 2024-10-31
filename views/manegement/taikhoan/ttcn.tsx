import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/Feather";

const Ttcn2 = () => {
  const [inputText, setInputText] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");

  const CustomCheckBox = ({ isSelected, onPress, title }) => {
    return (
      <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.checkboxText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Tài khoản đăng nhập</Text>
        {/* <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập tài khoản"
              placeholderTextColor="#ACACAC"
            />
          </View>
        </View> */}
        <View
          style={[
            styles.tt5,
            inputText.length > 10 && { backgroundColor: "#D8ECDA" }, // Đổi màu nền khi trên 10 ký tự
          ]}
        >
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16, flex: 1 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập tài khoản"
              placeholderTextColor="#ACACAC"
            />
            {inputText.length > 10 && (
              <Icon
                name="check"
                size={24}
                color="#30B153" // Màu của biểu tượng tích
              />
            )}
          </View>
        </View>
        <Text style={styles.text}>Tên</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập tên"
              placeholderTextColor="#ACACAC"
            ></TextInput>
          </View>
        </View>
        <Text style={styles.text}>Địa chỉ Email</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập địa chỉ Email"
              placeholderTextColor="#ACACAC"
            ></TextInput>
          </View>
        </View>
        <Text style={styles.text}>CMND/ CCCD</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập căn cước hoặc chứng minh"
              placeholderTextColor="#ACACAC"
            ></TextInput>
          </View>
        </View>
        <Text style={styles.text}>Giới tính</Text>
        <View style={styles.cb}>
          <CustomCheckBox
            title="Nam"
            isSelected={selectedGender === "male"}
            onPress={() => setSelectedGender("male")}
          />
          <CustomCheckBox
            title="Nữ"
            isSelected={selectedGender === "female"}
            onPress={() => setSelectedGender("female")}
          />
        </View>
        <Text style={styles.text}>Ngày sinh</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập ngày sinh"
              placeholderTextColor="#ACACAC"
            ></TextInput>
          </View>
        </View>
        <Text style={styles.text}>Quê quán</Text>
        <View style={styles.tt5}>
          <View style={styles.tt6}>
            <TextInput
              style={{ fontSize: 16 }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Nhập địa chỉ quê quán"
              placeholderTextColor="#ACACAC"
            ></TextInput>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginRight: 50,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12, // Để tạo hình tròn
    borderWidth: 1,
    borderColor: "#676767",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxSelected: {
    borderColor: "#30B153", // Màu primary
  },
  innerCircle: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#30B153", // Màu primary
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  cb: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 5,
  },
  checkIcon: {
    marginLeft: 10,
  },
});

export default Ttcn2;

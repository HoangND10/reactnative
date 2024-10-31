import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native"; // Import StyleSheet và View
import Icon from "react-native-vector-icons/FontAwesome6";
import Icon2 from "react-native-vector-icons/AntDesign";

const Caddie2 = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        Thống kê theo lượt phục vụ:
      </Text>
      <View style={styles.container2}>
        <View style={styles.tt12}>
          <View style={styles.tt13}>
            <Icon2 name="search1" size={20} top={3} />
            <TextInput
              style={{ fontSize: 14, left: 5, width: "80%" }}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Tìm theo tên, mã caddie"
              placeholderTextColor="#ACACAC"
            ></TextInput>
          </View>
        </View>
        <View style={styles.icon}>
          <Icon name={"arrow-down-long"} size={20} marginRight={-5} />
          <Icon name={"arrow-up-long"} size={20} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scv}>
        <View style={styles.tklpv}>
          <View style={styles.tklpv2}>
            <View style={styles.tklpv3}>
              <Text>drcd66</Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>Cao Thị Ngân</Text>
          </View>
          <View>
            <Text>
              <Text style={{ fontWeight: "bold" }}>13</Text> lượt
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scv: {
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    marginTop: 15,
  },
  container2: {
    backgroundColor: "#E7F6E8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: -15,
    marginBottom: 10,
  },
  icon: {
    flexDirection: "row",
    marginRight: 15,
  },
  tt12: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ECECEC",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    marginLeft: 15,
  },
  tt13: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tklpv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#E3E3E3",
  },
  tklpv2: {
    flexDirection: "row",
    alignItems: "center",
  },
  tklpv3: {
    borderWidth: 1,
    borderColor: "#B7B7B7",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default Caddie2;

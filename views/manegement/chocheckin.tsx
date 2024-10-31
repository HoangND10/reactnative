import React from "react";
import { StyleSheet, Text, View, Image } from "react-native"; // Import StyleSheet và View

const ChoCheckin = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    position: "relative",
  },
});

export default ChoCheckin;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const QRScannerScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false); // Trạng thái quét

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true); // Ngừng quét khi mã đã được quét
    Alert.alert(
      "QR Code Scanned",
      `QR Code: ${data}`,
      [{ text: "OK", onPress: () => setScanned(false) }] // Đặt `scanned` về `false` khi đóng thông báo
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} // Ngừng quét khi `scanned` là `true`
      >
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="x" size={24} />
        </TouchableOpacity>

        <View style={styles.overlay}>
          <Text style={styles.text}>Đưa camera về phía QR code</Text>
          <View style={styles.squareContainer}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 100,
    right: 20,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
  },
  overlay: {
    position: "absolute",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  squareContainer: {
    width: 300,
    height: 350,
    position: "relative",
    backgroundColor: "transparent",
    marginTop: 30,
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: "white",
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 70,
    height: 70,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: "white",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 70,
    height: 70,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: "white",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 70,
    height: 70,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "white",
  },
});

export default QRScannerScreen;

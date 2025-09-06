import ScanIcon from "@/components/ScanIcon";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

interface OverlayProps {
  scan: (data:string) => void;
  data: string;
}

export default function Overlay({ scan, data }: OverlayProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan a QR code</Text>
      <View style={styles.box} />
      <TouchableOpacity
        style={[styles.scanButton, isPressed && styles.scanButtonPressed]}
        onPressIn={() => {
          setIsPressed(true);
          scan(data);
        }}
        onPressOut={() => {
          setIsPressed(false);
          scan(data);
        }}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={["rgba(234, 102, 155, 0.7)", "rgba(162, 87, 75,0.7)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientButton}
        >
          <View style={styles.buttonContent}>
            <ScanIcon />
            <Text style={styles.scanButtonText}>Scan</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  box: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scanButton: {
    position: "absolute",
    bottom: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: 50,
  },
  scanButtonPressed: {
    transform: [{ scale: 0.95 }],
    shadowOpacity: 0.2,
    elevation: 8,
  },
  gradientButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    minWidth: 160,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  scanButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

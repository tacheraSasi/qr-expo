import { View, Text, StatusBar } from "react-native";
import React from "react";
import Scanner from "@/components/scanner/scanner";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Scanner />
    </View>
  );
}

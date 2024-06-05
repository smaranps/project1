import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native";
import { useCallback, useState } from "react";
import Slider from "./src/components/Range";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

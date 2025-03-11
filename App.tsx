import { View, Text, StyleSheet } from "react-native";
import { config } from "./config";

export default function App() {
  return (
    <View
      style={[styles.container, { backgroundColor: config.backgroundColor }]}
    >
      <Text style={styles.text}>{config.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});

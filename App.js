import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import VocabCard from "./components/VocabCard";

export default function App() {
  return (
    <View style={styles.container}>
      <VocabCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

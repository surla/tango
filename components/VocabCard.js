import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function VocabCard() {
  return (
    <View style={styles.container}>
      <Text style="styles.titleText">おはよう</Text>
      <Text style="styles.wordEN">Good Morning</Text>
      <Text style="styles.sentenceJP">父ちちが息子むすこに「おはよう。」</Text>
      <Text style="styles.sentenceEN">Father to son: 'Good morning.'</Text>
      <Text>N5</Text>

      <AntDesign name="sound" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F0EB",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  wordEN: {
    fontSize: 30,
  },
});

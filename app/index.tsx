import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Home } from "../pages/home";
import { COLOR } from "@utils/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" backgroundColor={COLOR.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

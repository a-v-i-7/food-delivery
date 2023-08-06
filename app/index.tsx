import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Home } from "../pages/home";
import { COLOR } from "@utils/index";
import Delivery from "./delivery";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Home />
        {/* <Delivery /> */}
      </SafeAreaView>
        <StatusBar style="light" backgroundColor={COLOR.primary} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

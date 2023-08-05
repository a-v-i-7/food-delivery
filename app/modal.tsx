import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { GLOBAL_STYLE } from "@utils/globalStyles";
import { COLOR } from "@utils/index";
export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  const { dish, price, image } = useLocalSearchParams();
  console.log(image);

  return (
    <View
      style={{
        flex: 1,
        ...GLOBAL_STYLE.p10,
        ...GLOBAL_STYLE.pv20,
        backgroundColor: COLOR.secondry,

        // backgroundColor: "red",
      }}
    >
      <View style={{ ...GLOBAL_STYLE.container, backgroundColor: "blue" }}>
        <View style={styles.modalContainer}>
          <Image
            source={require("@assets/dishes/food1.jpg")}
            contentFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    width: 200,
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
});

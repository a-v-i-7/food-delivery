import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { COLOR } from "../../utils";
import { Image } from "expo-image";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { imgAsset } from "@assets/assets";
import { GLOBAL_STYLE } from "@utils/globalStyles";

interface CardPropsType {
  dish: string;
  price: number;
  img: string;
}

const Card = (props: CardPropsType) => {
  const { img, dish, price } = props;

  return (
    <TouchableWithoutFeedback style={styles.cardContainer}>
      <Image
        //@ts-expect-error
        source={imgAsset[img]}
        contentFit="cover"
        contentPosition={"center"}
        style={{
          width: 140,
          height: 140,
          borderRadius: 100,
          alignSelf: "center",
          shadowColor: "#555",
          shadowOpacity: 5,
          shadowOffset: { width: 2.5, height: 2 },
          overflow: "hidden",
        }}
      />
      {/* <View style={styles.imageContainer}>
      </View> */}
      <View
        style={{
          alignItems: "center",
          padding: 2,
          paddingHorizontal: 10,
          marginVertical: 20,
        }}
      >
        <Text style={styles.title}>{dish}</Text>
        <Text style={[styles.title, {}]}>{`${price}rs`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.secondry,
    margin: 10,
    marginVertical: 10,
    paddingVertical: 20,
    borderRadius: 8,
    width: Dimensions.get("window").width / 2 - 40,
    height: 230,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});

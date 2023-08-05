import { View, Text, StyleSheet,  ImageSourcePropType, TouchableNativeFeedback } from "react-native";
import { COLOR } from "../../utils";
import {Image} from 'expo-image';
import { TouchableOpacity } from "react-native-gesture-handler";

interface CardPropsType {
  dish: string;
  price: number;
  img: ImageSourcePropType | string;
}

const Card = (props: CardPropsType) => {
  const {img, dish, price} = props;
  console.log("image", img);
  
  return (
    <TouchableOpacity >
      <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={img}
          contentFit="cover"
          contentPosition={"center"}
          style={{ width: "100%", height: "100%" }}
          
        />
      </View>
      <View
        style={{
          alignItems: "center",
          padding: 2,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
      >
        <Text style={styles.title}>{dish}</Text>
        <Text style={[styles.title, {}]}>{ `${price}rs`}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLOR.secondry,
    margin: 10,
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 8,
    width: "90%",
  },
  imageContainer: {
    borderRadius: 100,
    elevation: 15,
    width: 140,
    height: 140,
    shadowColor: "#555",
    shadowOpacity: 5,
    shadowOffset: { width: 2.5, height: 2 },
    backgroundColor: "purple",
    alignSelf: "center",
    overflow: "hidden",
    marginVertical: 15
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize"
    
  }
});

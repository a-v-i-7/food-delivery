import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { GLOBAL_STYLE } from "@utils/globalStyles";
import { COLOR } from "@utils/index";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { CounterButton, RButton } from "@components/button";
import { useContext, useState } from "react";
import { imgAsset } from "@assets/assets";
import { CartActions, CartContext, Types } from "@context/index";

export default function Modal() {
  const { dish, price, image } = useLocalSearchParams<{
    dish: string;
    price: string;
    image: string;
  }>();
  const { state, dispatch } = useContext(CartContext);
  const quantityInCart = state?.filter((a) => a.dish === dish)[0]?.quantity;
  const [quantity, setQuantity] = useState(quantityInCart || 0);
  const data: { name: string; icon: any; color: string }[] = [
    { name: "Vegan", icon: "leaf", color: "green" },
    { name: "Few Calories", icon: "fire", color: "orange" },
  ];

  return (
    <ScrollView
      style={{
        ...GLOBAL_STYLE.container,
        backgroundColor: COLOR.secondry,
        // paddingBottom: 50,
      }}
    >
      <View style={styles.imgContainer}>
        <Image
          //@ts-expect-error
          source={imgAsset[image]}
          contentFit="cover"
          style={{ width: 250, height: 250, borderRadius: 200 }}
        />
      </View>
      <View style={[styles.foodDetail]}>
        <Text style={GLOBAL_STYLE.h1}>{dish}</Text>
        <Text style={GLOBAL_STYLE.mv5}>240g</Text>
        <View style={GLOBAL_STYLE.flexRow}>
          {data.map((item, index) => (
            <View
              key={`${item.name}+ ${index}`}
              style={{
                ...GLOBAL_STYLE.flexRow,
                backgroundColor: COLOR.lightBg,
                ...GLOBAL_STYLE.alignCenter,
                ...GLOBAL_STYLE.p5,
                marginRight: 10,
                borderRadius: 5,
                ...GLOBAL_STYLE.mv5,
              }}
            >
              <MaterialIcons name={item.icon} size={22} color={item.color} />
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={GLOBAL_STYLE.pv10}>
          <Text style={styles.subHeading}>Nutritional Value per 100g</Text>
          <View
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              GLOBAL_STYLE.alignCenter,
              GLOBAL_STYLE.pv5,
            ]}
          >
            <View style={GLOBAL_STYLE.alignCenter}>
              <Text style={GLOBAL_STYLE.bold}>198</Text>
              <Text style={{ color: COLOR.grey }}>kcal</Text>
            </View>
            <View style={GLOBAL_STYLE.alignCenter}>
              <Text style={GLOBAL_STYLE.bold}>13.1</Text>
              <Text style={{ color: COLOR.grey }}>protein</Text>
            </View>
            <View style={GLOBAL_STYLE.alignCenter}>
              <Text style={GLOBAL_STYLE.bold}>13.4</Text>
              <Text style={{ color: COLOR.grey }}>fat</Text>
            </View>
            <View style={GLOBAL_STYLE.alignCenter}>
              <Text style={GLOBAL_STYLE.bold}>5.8</Text>
              <Text style={{ color: COLOR.grey }}>carbs</Text>
            </View>
          </View>
          <Text style={[GLOBAL_STYLE.bold, GLOBAL_STYLE.pv10]}>
            Ingredients
          </Text>
          <Text style={{ color: COLOR.grey }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            fugit ipsum aut dolorum incidunt sequi dignissimos dolorem!
            Asperiores, delectus possimus! Ratione sit maxime voluptatum?
            Distinctio nihil ducimus tempora harum cum.
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.buttonSection,
          GLOBAL_STYLE.flexRow,
          GLOBAL_STYLE.alignCenter,
          GLOBAL_STYLE.justifyBetween,
        ]}
      >
        <CounterButton
          counter={quantity}
          onAdd={() => setQuantity((quan) => quan + 1)}
          onSub={() =>
            setQuantity((quantity) => (quantity > 0 ? quantity - 1 : quantity))
          }
        />
        <RButton
          heading={`Add to Cart - rs ${(price as any) * quantity}`}
          buttonStyle={styles.cartButton}
          headingStyle={styles.btnText}
          onPress={() => {
            // get back to home screen
            router.back();
            // update cart of global store.
            dispatch({
              type: quantity>0 ?Types.update: Types.remove,
              // @ts-ignore
              payload: { dish, price, image, quantity },
            });
          }}
        />
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: "center",
    height: 300,
    backgroundColor: COLOR.lightBg,
    ...GLOBAL_STYLE.pv20,
  },
  foodDetail: {
    ...GLOBAL_STYLE.pv20,
    ...GLOBAL_STYLE.ph15,
  },
  subHeading: {
    color: COLOR.grey,
  },
  buttonSection: {
    marginTop: -20,
    paddingHorizontal: 15,
  },
  numberButtons: {
    backgroundColor: COLOR.grey,
    padding: 2,
    borderRadius: 10,
  },
  numButton: {
    height: 40,
    paddingHorizontal: 15,
  },
  cartButton: {
    width: "60%",
    height: 40,
  },
  btnText: {
    fontSize: 14,
  },
});

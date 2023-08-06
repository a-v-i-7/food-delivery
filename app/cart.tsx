import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useCallback, useContext, useMemo } from "react";
import { CartType, CartContext, Types } from "@context/index";
import { GLOBAL_STYLE } from "@utils/globalStyles";
import { Image } from "expo-image";
import { imgAsset } from "@assets/assets";
import { COLOR } from "@utils/index";
import { CounterButton, RButton } from "@components/button";
import { router } from "expo-router";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const total = useMemo(() => {
    return state
      .map((a) => a.price * a.quantity)
      .reduce((totalPrice, curr) => totalPrice + curr, 0);
  }, [...state]);
  const PROMO = parseInt((total / 3).toFixed());
  const _onSub = (item: CartType) => {
    dispatch({
      type: item.quantity > 1 ? Types.update : Types.remove,
      payload: { ...item, quantity: item.quantity - 1 },
    });
  };
  const _onAdd = (item: CartType) => {
    dispatch({
      type: item.quantity > 1 ? Types.update : Types.remove,
      payload: { ...item, quantity: item.quantity + 1 },
    });
  };
  return (
    <View
      style={[
        GLOBAL_STYLE.container,
        GLOBAL_STYLE.ph15,
        GLOBAL_STYLE.pv10,
        { flex: 1 },
      ]}
    >
      <ScrollView style={{ flexGrow: 1, marginBottom: 10 }}>
        {state.map((item, index) => (
          <View
            key={`${item.dish} ${index}`}
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              GLOBAL_STYLE.alignStart,
              styles.cartCardContainer,
              styles.scrollBox,
            ]}
          >
            <Image
              // @ts-expect-error
              source={imgAsset[item.image]}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <View
              style={{
                flex: 2,
                ...GLOBAL_STYLE.ph10,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...GLOBAL_STYLE.bold,
                  fontSize: 18,
                  alignSelf: "flex-start",
                }}
              >
                {item.dish}
              </Text>
              <Text>250g</Text>
              <View
                style={[
                  GLOBAL_STYLE.flexRow,
                  GLOBAL_STYLE.justifyBetween,
                  GLOBAL_STYLE.alignCenter,
                  GLOBAL_STYLE.m10,
                  { marginTop: 30 },
                ]}
              >
                <CounterButton
                  counter={item.quantity}
                  onSub={() => _onSub(item)}
                  onAdd={() => _onAdd(item)}
                  style={{
                    height: 30,
                    overflow: "hidden",
                    backgroundColor: COLOR.lightBg,
                  }}
                  btnBg={COLOR.lightBg}
                  color={COLOR.primary}
                />
                <Text style={GLOBAL_STYLE.bold}>{`${
                  item.price * item.quantity
                } rs`}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View>
        <View style={styles.promo}>
          <Text style={GLOBAL_STYLE.bold}>-3H4KURO</Text>
          <View
            style={{
              backgroundColor: COLOR.accent,
              height: 40,
              justifyContent: "center",
              margin: 10,
              borderRadius: 10,
              padding: 10,
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ ...GLOBAL_STYLE.bold }}>PROMOCODE CONFIRMED</Text>
          </View>
        </View>
        <View style={styles.totalAmountContainer}>
          <View
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              GLOBAL_STYLE.alignCenter,
              GLOBAL_STYLE.pv10,
              GLOBAL_STYLE.udBottom,
            ]}
          >
            <Text style={styles.darkText}> Subtotal</Text>
            <Text style={styles.darkText}>{total}</Text>
          </View>
          <View
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              GLOBAL_STYLE.alignCenter,
              GLOBAL_STYLE.udBottom,
              GLOBAL_STYLE.pv10,
            ]}
          >
            <Text style={styles.darkText}>Promocode</Text>
            <Text style={styles.darkText}>{PROMO}</Text>
          </View>
          <View
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              GLOBAL_STYLE.alignCenter,
              GLOBAL_STYLE.pv10,
            ]}
          >
            <Text
              style={[
                GLOBAL_STYLE.bold,
                styles.darkText,

                { color: COLOR.primary, fontSize: 18 },
              ]}
            >
              Total
            </Text>
            <Text
              style={[
                GLOBAL_STYLE.bold,
                styles.darkText,

                { color: COLOR.primary, fontSize: 18 },
              ]}
            >
              RS {total - PROMO}
            </Text>
          </View>
        </View>
        <RButton
          heading="order"
          onPress={() => {router.push("/delivery/")}}
          buttonStyle={{ width: "100%" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartCardContainer: {
    backgroundColor: COLOR.secondry,
    ...GLOBAL_STYLE.ph15,
    ...GLOBAL_STYLE.mv5,
  },
  scrollBox: {
    borderRadius: 10,
    padding: 10,
    paddingVertical: 15,
  },
  promo: {
    height: 54,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 5,
    backgroundColor: COLOR.secondry,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalAmountContainer: {},
  darkText: {
    color: "grey",
    letterSpacing: 1.2,
    lineHeight: 20,
    fontWeight: "bold",
    ...GLOBAL_STYLE.ph10
  },
});
export default Cart;

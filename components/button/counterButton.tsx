import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React, { useState } from "react";
import { GLOBAL_STYLE } from "@utils/globalStyles";
import { COLOR } from "@utils/index";
import {default as RButton} from "./button";

const CounterButton: React.FC<{
  counter: number;
  onAdd: () => void;
  onSub: () => void;
  style?: StyleProp<ViewStyle>;
  btnBg?: string;
  color?: string;
}> = ({ counter, onAdd, onSub, style, btnBg, color }) => {
  return (
    <View
      style={[
        styles.numberButtons,
        GLOBAL_STYLE.flexRow,
        GLOBAL_STYLE.alignCenter,
        style,
      ]}
    >
      <RButton
        heading="-"
        backgroundColor={btnBg ? btnBg : COLOR.grey}
        buttonStyle={styles.numButton}
        onPress={() => onSub()}
        color={color? color: COLOR.secondry}

      />
      <Text
        style={[
          GLOBAL_STYLE.bold,
          GLOBAL_STYLE.ph5,
          { backgroundColor: btnBg },
        ]}
      >
        {counter}
      </Text>
      <RButton
        heading="+"
        backgroundColor={btnBg ? btnBg : COLOR.grey}
        buttonStyle={styles.numButton}
        onPress={() => onAdd()}
        color={color? color: COLOR.secondry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  numberButtons: {
    backgroundColor: COLOR.grey,
    padding: 2,
    borderRadius: 10,
  },
  numButton: {
    height: 40,
    paddingHorizontal: 10,
  },
});
export default CounterButton;

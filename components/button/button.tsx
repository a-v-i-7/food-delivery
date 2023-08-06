import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewProps,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { COLOR } from "@utils/index";
import { GLOBAL_STYLE } from "@utils/globalStyles";

interface ButtonProps extends TouchableOpacityProps {
  heading: string;
  color?: string | null | undefined;
  backgroundColor?: string | null | undefined;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle> | null | undefined;
  headingStyle?: StyleProp<TextStyle> | null | undefined;
  RBIconLeft?: React.JSX.Element;
  RBIconRight?: React.JSX.Element;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    heading,
    color,
    backgroundColor,
    buttonStyle,
    headingStyle,
    RBIconLeft,
    RBIconRight,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.checkoutButton,
        backgroundColor ? { backgroundColor } : {},
        buttonStyle,
      ]}
      onPress={() => props.onPress()}
    >
      {RBIconLeft}
      <Text style={[styles.buttonText, color ? { color } : {}, headingStyle]}>
        {heading}
      </Text>
      {RBIconRight}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkoutButton: {
    backgroundColor: COLOR.primary,
    // width: "90%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    ...GLOBAL_STYLE.flexRow,
    alignItems: "center"
  },
  buttonText: {
    color: COLOR.secondry,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    alignSelf: "center",
    paddingHorizontal:5
  },
});
export default Button;

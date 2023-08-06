import { StyleSheet } from "react-native";
import { COLOR } from ".";

export const GLOBAL_STYLE = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  alignCenter: { alignItems: "center" },
  alignStart: { alignItems: "flex-start" },
  bold: { fontWeight: "bold", letterSpacing: 1.2 },
  udBottom: {
    borderBottomColor: COLOR.lightPrimary,
    borderBottomWidth: 0.5, 
  },
  container: {
    // flex: 1,
    backgroundColor: COLOR.lightBg,
  },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p15: { padding: 15 },
  p20: { padding: 20 },
  pv5: { paddingVertical: 5 },
  pv10: { paddingVertical: 10 },
  pv15: { paddingVertical: 15 },
  pv20: { paddingVertical: 20 },
  ph5: { paddingHorizontal: 5 },
  ph10: { paddingHorizontal: 10 },
  ph15: { paddingHorizontal: 15 },
  ph20: { paddingHorizontal: 20 },
  m5: { margin: 5 },
  m10: { margin: 10 },
  m15: { margin: 15 },
  m20: { margin: 20 },
  mh5: { marginHorizontal: 5 },
  mh10: { marginHorizontal: 10 },
  mh15: { marginHorizontal: 15 },
  mh20: { marginHorizontal: 20 },
  mv5: { marginVertical: 5 },
  mv10: { marginVertical: 10 },
  mv15: { marginVertical: 15 },
  mv20: { marginVertical: 20 },
  h1: {
    fontWeight: "bold",
    fontSize: 28,
    textTransform: "capitalize",
  },
});

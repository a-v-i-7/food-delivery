import { Region } from "react-native-maps";

export const COLOR = {
  primary: "#1f1f1f",
  // lightPrimary: "#373737",
  lightPrimary: "grey",
  grey: "grey",
  secondry: "#ffffff",
  accent: "#cafd00",
  lightBg: "#eee",
  lightText: "#111",
};

export const goToCoordinate = (coords: Region, mapRef: any) => {
  mapRef.current.animateToRegion(coords, 3 * 1000);
};

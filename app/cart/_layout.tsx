import { COLOR } from "@utils/index";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLOR.primary },
        headerTintColor: COLOR.secondry,
        headerTitle: "Cart"
      }}
    />
  );
}

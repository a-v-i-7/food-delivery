import { Stack } from "expo-router/stack";
import { COLOR } from "@utils/index";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "fullScreenModal",
          animation: "slide_from_bottom",
          fullScreenGestureEnabled: true,
          headerShown: true,
          headerTitle: "Add Food to cart",
          gestureDirection: "vertical",
          gestureEnabled: true,
          headerStyle: {backgroundColor: COLOR.primary},
          headerTintColor: COLOR.secondry
        }}
      />
    </Stack>
  );
}

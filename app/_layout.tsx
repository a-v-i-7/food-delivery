import { Stack } from "expo-router/stack";
import { COLOR } from "@utils/index";
import { CartProvider } from "@context/index";

export default function Layout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            headerShown: true,
            headerTitle: "Cart",
            headerTintColor: COLOR.secondry,
            headerStyle: {backgroundColor: COLOR.primary}
          }}
        />
        <Stack.Screen
          name={"delivery"}
          options={{
            headerShown: false,
          }}
        />
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
            headerStyle: { backgroundColor: COLOR.primary },
            headerTintColor: COLOR.secondry,
          }}
        />
      </Stack>
    </CartProvider>
  );
}

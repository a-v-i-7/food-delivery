import { createContext, useReducer, useState } from "react";
import { Text } from "react-native";

export interface CartType {
  dish: string;
  price: number;
  quantity: number;
  image: string;
}

type Type = "UPDATE" | "REMOVE";

//  { [index: string]: any }
// an object with key as string and value as any
interface obj {
  [index: string]: any;
}

type ActionMap<M extends obj> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  update = "UPDATE",
  remove = "REMOVE",
}

type CartPayload = {
  [Types.update]: {
    dish: string;
    price: number;
    quantity: number;
    image: string;
  };
  [Types.remove]: {
    dish: string;
    price: number;
    quantity: number;
    image: string;
  };
};

type a = keyof ActionMap<CartPayload>;
export type CartActions = ActionMap<CartPayload>[a];

export const CartContext = createContext<{
  state: CartType[];
  dispatch: React.Dispatch<CartActions>;
}>({
  state: [],
  dispatch: () => null,
});

const updateCartReducer = (state: CartType[], action: CartActions) => {
  const { payload, type } = action;
  let updatedState = [...state];
  if (type === "UPDATE") {
    const dishIndex = state.findIndex((a) => a.dish === payload.dish);
    dishIndex < 0
      ? (updatedState = [...state, payload])
      : (updatedState[dishIndex] = payload);
    console.log("update", updatedState);
    return updatedState;
  }
  if (type === "REMOVE") {
    return [...state.filter((a) => a.dish !== payload.dish)];
  }
  return [...state];
};

export function CartProvider(props: any) {
  const [state, dispatch] = useReducer(updateCartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

//
// type funcTypeArrow = <Input>(arg: Input) => Input;
// type func = { <Input>(arg: Input): Input };
// interface FunctionType<Input> {
//   asd(arg: Input): Input;
// }
// interface StringValidator {
//   isAcceptable: (s: string) => boolean;
// }
// let lettersRegexp = /^[A-Za-z]+$/;
// class LettersOnlyValidator implements StringValidator {
//   isAcceptable = (s: string) => {
//     return lettersRegexp.test(s);
//   };
// }
// class qw implements FunctionType<number> {
//   asd(s: number) {
//     return s;
//   }
// }
// const val = new LettersOnlyValidator();

// let result = val.isAcceptable("12");

// let myIdentity: funcTypeArrow = (arg) => arg;

// let iden: func = (arg) => arg;

// myIdentity<number>(23);

// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key];
// }

// let x = { a: "asd", b: 2, c: 3, d: 4 };

// getProperty(x, "c");

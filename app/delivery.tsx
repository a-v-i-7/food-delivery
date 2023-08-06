const COORDS1 = {
  latitude: 25.9651768,
  longitude: 87.7199198,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const COORDS2 = {
  latitude: 25.963784848087847,
  longitude: 87.72170778942397,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

import {
  Animated,
  Dimensions,
  Easing,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { RButton } from "@components/button";
import { router } from "expo-router";
import { COLOR } from "@utils/index";
import { GLOBAL_STYLE } from "@utils/globalStyles";
import MapView, { Marker, Polyline } from "react-native-maps";
import { CartContext, Types } from "@context/index";

type Props = {};

const Delivery = (props: Props) => {
  const aTime = useRef(new Animated.Value(0)).current;
  const bTime = useRef(new Animated.Value(0)).current;
  const cTime = useRef(new Animated.Value(0)).current;
  const [foodReady, setFoodReady] = useState(false);
  const [deliveryReady, setDeliveryReady] = useState(false);
  const [foodDelivered, setFoodDelivered] = useState(false);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    Animated.timing(aTime, {
      toValue: 50,
      duration: 1500,
      useNativeDriver: false,
      delay: 300,
      easing: Easing.linear,
    }).start(() => {
      setFoodReady((_) => true);
    });
  }, [aTime]);
  useEffect(() => {
    Animated.timing(bTime, {
      toValue: 50,
      duration: 1500,
      useNativeDriver: false,
      delay: 1800,
      easing: Easing.linear,
    }).start(() => {
      setDeliveryReady((_) => true);
    });
  }, [bTime]);
  useEffect(() => {
    Animated.timing(cTime, {
      toValue: 50,
      duration: 1500,
      useNativeDriver: false,
      delay: 5100,
      easing: Easing.linear,
    }).start(() => {
      setFoodDelivered((_) => true);
    });
  }, [cTime]);

  return (
    <View style={{ flex: 1 }}>
      {/* React native Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={COORDS1}
          minZoomLevel={17}
          mapType="standard"
          moveOnMarkerPress
        >
          <Marker style={{ backgroundColor: "green" }} coordinate={COORDS1} />
          <Marker coordinate={COORDS2} />
          <Polyline strokeWidth={5} coordinates={[COORDS1, COORDS2]} />
        </MapView>
      </View>

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <View
          style={[styles.orderDetail, GLOBAL_STYLE.udBottom, GLOBAL_STYLE.pv10]}
        >
          <Text style={styles.bottomCartText}>
            Estimated Delivery Time is 6:18 PM
          </Text>
          <Text
            style={[
              styles.bottomCartText,
              { color: COLOR.grey },
              GLOBAL_STYLE.pv5,
            ]}
          >
            Your Order is already on the way to you!
          </Text>
        </View>
        <View
          style={[
            GLOBAL_STYLE.flexRow,
            GLOBAL_STYLE.alignCenter,
            // GLOBAL_STYLE.justifyCenter,
            GLOBAL_STYLE.pv20,
            { paddingHorizontal: 50 },
            GLOBAL_STYLE.udBottom,
          ]}
        >
          <MaterialIcons
            name={"paper-roll"}
            size={35}
            color={COLOR.accent}
            style={GLOBAL_STYLE.mh5}
          />
          <View style={styles.dottedLine}>
            <Animated.View style={[styles.animateBorder, { width: aTime }]} />
          </View>
          <MaterialIcons
            name={"bowl-mix"}
            size={35}
            color={foodReady ? COLOR.accent : COLOR.secondry}
            style={GLOBAL_STYLE.mh5}
          />
          <View style={styles.dottedLine}>
            <Animated.View style={[styles.animateBorder, { width: bTime }]} />
          </View>
          <MaterialIcons
            name={"car-pickup"}
            size={35}
            color={deliveryReady ? COLOR.accent : COLOR.secondry}
            style={GLOBAL_STYLE.mh5}
          />
          <View style={styles.dottedLine}>
            <Animated.View style={[styles.animateBorder, { width: cTime }]} />
          </View>
          <MaterialIcons
            name={"check-circle"}
            size={35}
            color={foodDelivered ? COLOR.accent : COLOR.secondry}
          />
        </View>
        <View
          style={[
            GLOBAL_STYLE.flexRow,
            GLOBAL_STYLE.alignCenter,
            GLOBAL_STYLE.justifyBetween,
            GLOBAL_STYLE.pv20,
            GLOBAL_STYLE.ph20,
            GLOBAL_STYLE.udBottom,
            { paddingHorizontal: 50 },
          ]}
        >
          <View>
            <Text style={styles.bottomCartText}>Mahesh Babu</Text>
            <Text style={[styles.bottomCartText, { color: COLOR.grey }]}>
              Courier
            </Text>
          </View>
          <View style={[GLOBAL_STYLE.flexRow, GLOBAL_STYLE.alignCenter]}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name={"phone"} size={30} color={COLOR.primary} />
            </View>
            <View style={styles.iconWrapper}>
              <MaterialIcons name={"message"} size={30} color={COLOR.primary} />
            </View>
          </View>
        </View>
      </View>
      {/*  Back Button */}
      <RButton
        heading="Home"
        buttonStyle={styles.backButton}
        onPress={() => {
          dispatch({ type: Types.cleanCart, payload: null });
          router.push("/");
        }}
        RBIconLeft={
          <MaterialIcons name={"home"} size={21} color={COLOR.secondry} />
        }
      />
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  map: { ...StyleSheet.absoluteFillObject },
  mapContainer: {
    backgroundColor: "red",
    width: "100%",
    // height: (Dimensions.get("screen").height * 2) / 3 - 30,
    height: "75%",
  },
  backButton: {
    position: "absolute",
    left: 15,
    top: 35,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  bottomCard: {
    backgroundColor: COLOR.primary,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
  },
  orderDetail: {},
  smallCircle: {
    width: 5,
    height: 5,
    backgroundColor: COLOR.secondry,
    marginHorizontal: 2,
  },
  dottedLine: {
    backgroundColor: "transparent",
    borderTopColor: COLOR.secondry,
    borderTopWidth: 5,
    width: 50,
    borderStyle: "dotted",
    position: "relative",
  },
  animateBorder: {
    position: "absolute",
    left: 0,
    top: -5,
    bottom: 0,
    right: 0,
    borderTopColor: COLOR.accent,
    borderTopWidth: 5,
    borderStyle: "dotted",
  },
  bottomCartText: {
    color: COLOR.secondry,
    fontSize: 16,
    alignSelf: "center",
  },
  iconWrapper: {
    backgroundColor: COLOR.secondry,
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
});

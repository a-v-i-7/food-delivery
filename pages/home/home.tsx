import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useContext } from "react";
import { COLOR } from "../../utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FoodCard } from "../../components/food-card";
import { GLOBAL_STYLE } from "@utils/globalStyles";
import { Link, router } from "expo-router";
import { CartContext } from "@context/index";
import { RButton } from "@components/button";

export default function Home() {
  const { state } = useContext(CartContext);

  return (
    <View>
      <ScrollView style={GLOBAL_STYLE.container}>
        <View style={styles.hero}>
          <View style={styles.heroTop}>
            <View style={[GLOBAL_STYLE.flexRow, GLOBAL_STYLE.justifyBetween]}>
              <Text style={styles.heading}>TheKitchen~</Text>
              <View style={[styles.iconBox, GLOBAL_STYLE.flexRow]}>
                <Ionicons name="cart-outline" size={32} color={COLOR.primary} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>2</Text>
              </View>
            </View>
            <View style={[styles.searchBoxContainer]}>
              <Ionicons
                name="search-outline"
                color="#c1c1c1"
                size={21}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search for something tasty..."
                placeholderTextColor={"#c1c1c1"}
                style={styles.searchBox}
              />
            </View>
          </View>
          <View style={styles.heroBottom}>
            <View
              style={[
                GLOBAL_STYLE.udBottom,
                GLOBAL_STYLE.pv10,
                GLOBAL_STYLE.flexRow,
              ]}
            >
              <Ionicons name="ios-repeat" color={COLOR.primary} size={16} />
              <Text style={[styles.bold]}> Repeat Last Order</Text>
            </View>
            <View
              style={[
                GLOBAL_STYLE.udBottom,
                GLOBAL_STYLE.pv10,
                GLOBAL_STYLE.flexRow,
              ]}
            >
              <Ionicons name="help-buoy" color={COLOR.primary} size={16} />
              <Text style={[styles.bold]}> Help me choose</Text>
            </View>
            <View style={[GLOBAL_STYLE.pv10, GLOBAL_STYLE.flexRow]}>
              <Ionicons name="color-wand" color={COLOR.primary} size={16} />
              <Text style={[styles.bold]}> Surprise me</Text>
            </View>
          </View>
        </View>
        <View style={GLOBAL_STYLE.p20}>
          <View
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              { alignItems: "center" },
            ]}
          >
            <Text style={styles.subHeading}>Top Categories</Text>
            <Text style={styles.lightText}>View All</Text>
          </View>
          <View style={GLOBAL_STYLE.pv5}>
            <FlatList<{ name: string; icon: any; color: string }>
              data={[
                { name: "vegan", icon: "leaf", color: "green" },
                { name: "coffe", icon: "cup", color: "brown" },
                { name: "brinjal", icon: "bowl-mix", color: "purple" },
                { name: "donuts", icon: "disc", color: "pink" },
                { name: "icecream", icon: "ice-cream", color: "yellow" },
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.categoryItem}>
                  <MaterialIcons
                    name={item.icon}
                    size={22}
                    color={item.color}
                  />
                  <Text
                    style={[
                      styles.bold,
                      {
                        fontSize: 18,
                        paddingVertical: 4,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    {" "}
                    {item.name}{" "}
                  </Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.recommendSection}>
          <View
            style={[
              GLOBAL_STYLE.flexRow,
              GLOBAL_STYLE.justifyBetween,
              GLOBAL_STYLE.alignCenter,
            ]}
          >
            <Text style={styles.subHeading}>Recommended for you</Text>
            <Text style={styles.lightText}>View all</Text>
          </View>
          <View>
            <FlatList<{ dish: string; price: number; image: string }>
              data={[
                {
                  dish: "Chicken kebab",
                  price: 200,
                  image: "f1image",
                },
                {
                  dish: "Burger meal",
                  price: 400,
                  image: "f2image",
                },
                {
                  dish: "Lamb Burger",
                  price: 600,
                  image: "f3image",
                },
                {
                  dish: "Noodles",
                  price: 300,
                  image: "f4image",
                },
                {
                  dish: "Thali",
                  price: 250,
                  image: "f5image",
                },
                {
                  dish: "Chiken Tikka",
                  price: 200,
                  image: "f1image",
                },
              ]}
              keyExtractor={(item, index) => `${item.dish}-${index}`}
              renderItem={({ item }) => (
                <Link href={{ pathname: "/modal", params: { ...item } }}>
                  <FoodCard
                    img={item.image}
                    price={item.price}
                    dish={item.dish}
                  />
                </Link>
              )}
              scrollEnabled={false}
              numColumns={2}
            />
          </View>
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
      <RButton
        heading={
          state.length > 0
            ? `Check out ${state
                .map((a) => a.price * a.quantity)
                .reduce((totalPrice, curr) => totalPrice + curr, 0)} rs`
            : "Please Add Products"
        }
        buttonStyle={styles.checkoutButton}
        onPress={() => router.push("/cart/")}
        disabled={state.length == 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: COLOR.secondry,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  heroTop: {
    backgroundColor: COLOR.primary,
    paddingTop: 45,
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  heading: {
    color: COLOR.secondry,
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
  iconBox: {
    backgroundColor: COLOR.accent,
    borderRadius: 5,
    width: 60,
    height: 35,
    padding: 2,
    paddingHorizontal: 5,
    justifyContent: "space-around",
  },
  searchBoxContainer: {
    paddingVertical: 10,
    position: "relative",
  },
  searchBox: {
    backgroundColor: COLOR.lightPrimary,
    color: "#e1e1e1",
    padding: 5,
    paddingLeft: 40,
    width: "100%",
    borderRadius: 10,
    height: 50,
    fontSize: 18,
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    top: "48%",
    elevation: 1000,
    zIndex: 1000,
  },
  heroBottom: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  option: {
    paddingVertical: 10,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 14,
  },

  subHeading: {
    fontWeight: "bold",
    fontSize: 21,
  },
  lightText: {
    fontSize: 16,
    color: "#b8b2b2",
  },
  categoryItem: {
    backgroundColor: COLOR.secondry,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
  },
  recommendSection: {
    padding: 20,
    paddingTop: 0,
  },
  checkoutButton: {
    position: "absolute",
    bottom: 10,
    // left: 10,
    backgroundColor: COLOR.primary,
    width: "90%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLOR.secondry,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    alignSelf: "center",
  },
});

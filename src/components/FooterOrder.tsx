import { View, StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";

const FooterOrder = () => {
  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.footer}>
      <Image
        style={styles.icon_shopping_cart}
        source={require("../../publics/img/icon_cart.png")}
      />
      <View style={styles.count}>
        <Text style={styles.calutation} onPress={() => sub()}>
          -
        </Text>
        <Text style={styles.calutation}>{count}</Text>
        <Text style={styles.calutation} onPress={() => add()}>
          +
        </Text>
      </View>
      <View style={styles.buttonAdd}>
        <Image
          style={styles.addBag}
          source={require("../../publics/img/shopping-bag.png")}
        />

        <Text style={styles.titleAdd}>Add to Cart</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#FFFFFF",
    paddingLeft: 26,
    paddingRight: 26,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon_shopping_cart: {
    width: 30,
    height: 30,
  },
  count: {
    flexDirection: "row",
    height: 50,
    width: 100,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 25,
  },
  calutation: {
    width: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonAdd: {
    height: 50,
    width: 170,
    backgroundColor: "#FB741A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 35,
  },
  addBag: {
    height: 20,
    width: 20,
  },
  titleAdd: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
export default FooterOrder;

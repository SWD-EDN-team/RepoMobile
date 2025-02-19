import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import FooterOrder from "@/components/FooterOrder";
import {router} from "expo-router";

const DetailScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text 
          onPress={() => router.navigate("/screens/HomeScreen/HomeScreen")}
        > back home</Text>
        <View style={styles.container}>
          <Image
            style={styles.imageClothers}
            source={require("@/assets/img/Frame_14.png")}
          />
          <View>
            <Text style={styles.titleClother}>T-shirt</Text>
            <Text style={styles.priceClother}>$10</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tittle}>Size</Text>
            <Text>Size Chart</Text>
          </View>
          <View style={styles.formSize}>
            <View style={styles.buttonSize}>
              <Text>S</Text>
            </View>
            <View style={styles.buttonSize}>
              <Text>M</Text>
            </View>
            <View style={styles.buttonSize}>
              <Text>L</Text>
            </View>
            <View style={styles.buttonSize}>
              <Text>XL</Text>
            </View>
            <View style={styles.buttonSize}>
              <Text>XXL</Text>
            </View>
          </View>
          <Text style={styles.tittle}>Description</Text>
          <Text style={styles.description}>
            Wrap yourself in warmth with our dreamy light pink oversized crew
            sweatshirt, a quintessential choice for the cozy autumn days ahead.
            This ultra-comfortable gem offers a loose fit that embraces you in
            softness. Picture yourself snuggled up, pairing it with leggings and
            your favorite kicks, creating a snug, off-duty look that exudes
            autumn warmth. Embrace the season in style and comfort with this
            irresistibly soft, light pink cocoon of coziness.
          </Text>
          <Text style={styles.description}>
            Wrap yourself in warmth with our dreamy light pink oversized crew
            sweatshirt, a quintessential choice for the cozy autumn days ahead.
            This ultra-comfortable gem offers a loose fit that embraces you in
            softness. Picture yourself snuggled up, pairing it with leggings and
            your favorite kicks, creating a snug, off-duty look that exudes
            autumn warmth. Embrace the season in style and comfort with this
            irresistibly soft, light pink cocoon of coziness.
          </Text>
          <Text style={styles.description}>
            Wrap yourself in warmth with our dreamy light pink oversized crew
            sweatshirt, a quintessential choice for the cozy autumn days ahead.
            This ultra-comfortable gem offers a loose fit that embraces you in
            softness. Picture yourself snuggled up, pairing it with leggings and
            your favorite kicks, creating a snug, off-duty look that exudes
            autumn warmth. Embrace the season in style and comfort with this
            irresistibly soft, light pink cocoon of coziness.
          </Text>
          <Text style={styles.description}>
            Wrap yourself in warmth with our dreamy light pink oversized crew
            sweatshirt, a quintessential choice for the cozy autumn days ahead.
            This ultra-comfortable gem offers a loose fit that embraces you in
            softness. Picture yourself snuggled up, pairing it with leggings and
            your favorite kicks, creating a snug, off-duty look that exudes
            autumn warmth. Embrace the season in style and comfort with this
            irresistibly soft, light pink cocoon of coziness.
          </Text>
        </View>
      </ScrollView>
      <FooterOrder />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  imageClothers: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  titleClother: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  priceClother: {
    fontSize: 18,
    color: "#FF0000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formSize: {
    flexDirection: "row",
    gap: 7,
  },
  button: {},
  buttonSize: {
    height: 50,
    width: 50,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8C8C90",
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 25,
    textAlign: "justify",
  },
});

export default DetailScreen;

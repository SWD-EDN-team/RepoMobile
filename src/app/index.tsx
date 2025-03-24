import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { ErrorBoundaryProps, router } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
}

SplashScreen.preventAutoHideAsync();

const RootPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
        await SplashScreen.hideAsync();
        router.replace("/auths/welcome");
      }
    }
    prepare();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image
          source={require("@/assets/icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 500,
    height: 500,
  },
});

export default RootPage;

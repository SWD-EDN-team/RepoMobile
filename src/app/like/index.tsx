import { View, Text } from "react-native";
import { Link } from "expo-router";

//url : /like
const Like = () => {
  return (
    <View>
      <Text>like_index</Text>
      <Link href={"/likeDetail"}>Go to quandba</Link>
    </View>
  );
};

export default Like;

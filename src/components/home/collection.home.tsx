import { View, Image, Text } from "react-native";

interface Ipops {
  name: string;
}

const CollectionHome = (props: Ipops) => {
  const { name } = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default CollectionHome;

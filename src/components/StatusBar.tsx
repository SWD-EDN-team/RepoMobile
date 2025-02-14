import { View, Text,StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get('window');

interface StatucBarProps {
  title: string;
  handlePress: Function;
}
const StatusBar:React.FC<StatucBarProps> = ({title,handlePress}) => {
  return (
    <View style={[styles.statusBar]}>
        <Text onPress={()=>handlePress()} style={styles.button}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  statusBar:{
    backgroundColor: "#FFFFFF",
    height: 90,
    justifyContent: "center",
    alignItems: "center" 
  },button:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center" ,
    color: "#fff",
    backgroundColor:"#483028",
    height:52,
    lineHeight:52,
    width: width - 26,
    borderRadius: 8,
  }
})
export default StatusBar;

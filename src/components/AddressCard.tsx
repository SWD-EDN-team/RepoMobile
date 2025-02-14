import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity   } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "react-native-paper";
interface AddressCardProps {
  data : {    
    id: string;
    name: string;
    street: string;
  };
  onEdit(value: any): void;
  onDelete(value: any): void;
  onSelect(value: any): void;
  selectedId: string;
  isSelect?: boolean;
}


const AddressCard: React.FC<AddressCardProps> = ({ data, onEdit, onDelete, onSelect, selectedId, isSelect=false}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onSelect(data)}>
      <View style={styles.cardContent}>
        <FontAwesomeIcon icon={faLocationDot} style={styles.icon} size={25} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.street}>{data.street}</Text>
        </View>
        { isSelect ? 
        <View style={{ transform: [{ scale: 1.0 }] }}>
          <RadioButton
            value={data.id}
            status={selectedId === data.id ? "checked" : "unchecked"}
            onPress={() => onSelect(data.id)}
          />
        </View> : 
        <View style={styles.actions}>
          <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
            <FontAwesomeIcon icon={faEdit} size={15} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.actionButton} >
            <FontAwesomeIcon icon={faTrash} size={15} />
          </TouchableOpacity>
        </View> }
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: "#555",
    marginRight: 25,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  street: {
    fontSize: 10,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
  },
  actionButton: {
    padding: 8
  },
});

export default AddressCard;
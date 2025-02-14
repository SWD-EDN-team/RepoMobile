import { View, Text,Image ,StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
interface AddressCardProps{
  data: {
    name: string,
    street: string,
    // city?: string,
    // state?: string,
    // country?: string,
    // description?: string,
  },
  handleEdit?: Function,
  handleDelete?: Function,
  handleSelect?: Function,
}

const AddressCard:React.FC<AddressCardProps> = ({data,handleDelete,handleEdit,handleSelect}) => {
  return (
    <View>
      <View>
<FontAwesomeIcon icon={faLocationDot} />
        <Text>{data.name}dasdass</Text>
      </View>
      <Text>{data.name}</Text>
    </View>

  )
}
const styles = StyleSheet.create({
  icon_pin_address:{
    width:20,
    height:20,
    tintColor:"#555555",
    resizeMode:"cover"
  }
})

export default AddressCard
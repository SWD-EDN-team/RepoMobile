import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../../types/NavigationTypes'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
type Props= {
  route: RouteProp<RootStackParamList,"DescriptionCard">,
  navigation: StackNavigationProp<RootStackParamList,"Home">,
}
const DescriptionCardScreen:React.FC<Props> = ({route,navigation}) => {
  const [count, setCount] = useState<number>(0)
  
  return (
    <View>
      <Text>DescriptionCardScreen</Text>
      <View>
      <Text>Details Screen</Text>
      <Text>Count: {count}</Text>
      <Button title='increase' onPress={() => setCount(count+1)} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
    </View>
  )
}

export default DescriptionCardScreen
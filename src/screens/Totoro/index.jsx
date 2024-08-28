import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Totoro() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>my friend</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
        </TouchableOpacity>
    </View>
  );
};
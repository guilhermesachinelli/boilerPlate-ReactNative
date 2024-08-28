import { View, Text,  } from 'react-native'
import styles from './styles'
import Title from '../../components/Tittle'
import TouchButton from '../../components/TouchButton'
export default function Ghibli() {
  return (
    <View style={styles.container}>
      <Title title="Ghibli Screen" />
      <TouchButton route="Totoro" text="Go to Totoroo"  />
      <TouchButton route="Home" text="Go to Home"  />
    </View>
  )
}
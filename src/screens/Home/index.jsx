import { View, Text,  } from 'react-native'
import styles from './styles'
import Title from '../../components/Tittle'
import TouchButton from '../../components/TouchButton'
export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home Screen" />
      <TouchButton route="Totoro" text="Go to Totoroo"  />
    </View>
  )
}
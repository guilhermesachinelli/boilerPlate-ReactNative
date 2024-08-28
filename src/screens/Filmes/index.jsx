import { View, Text, Image, ScrollView} from 'react-native'
import styles from './styles'
import Title from '../../components/Tittle'
import TouchButton from '../../components/TouchButton'
export default function Filmes() {

  return (
    <View style={styles.container}>
      <ScrollView>
            <Title title="Circulo de Fogo" />
      <Image source={require('../../../assets/circulo-de-fogo.jpg')} style={styles.image} />
      <Text style={styles.text}>Criaturas monstruosas conhecidas como Kaiju começam a emergir do mar. Para combatê-los, a humanidade desenvolve uma série de robôs gigantescos, os Jaegers. Cada um é controlado por duas pessoas</Text>
      <Title title="Operação Cupido" />
      <Image source={require('../../../assets/operacao-cupido.jpg')} style={styles.image} />
      <Text style={styles.text}>Uma menina de 11 anos de idade conhece sua irmã gêmea que mora na Califórnia e, juntas, planejam reconciliar seus pais divorciados. A primeira missão é deter uma interesseira que tenta conquistar o pai.</Text>
      <TouchButton route="Home" text="Voltar" />
      </ScrollView>
    </View>
  )
}
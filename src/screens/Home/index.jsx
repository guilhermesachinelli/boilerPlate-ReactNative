import { View, Text,  } from 'react-native'
import styles from './styles'
import Title from '../../components/Tittle'
import TouchButton from '../../components/TouchButton'
export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Macedo & Godoy" />
      <Text style={styles.text}>Estudamos no SENAI Valinhos, cursando Desenvolvimento de Sistemas</Text>
      <Title title="Hobbies" />
      <TouchButton route="Hobbies" text="Hobbies Godoy : Tocar Guitarra"  />
      <TouchButton route="Hobbies" text="Hobbies Macedo : Jogar Bola"  />
      <Title title="Filmes Favoritos" />
      <TouchButton route="Filmes" text="Godoy : Circulo de Fogo"  />
      <TouchButton route="Filmes" text="Macedo : Operação Cupido"  />
    </View>
  )
}
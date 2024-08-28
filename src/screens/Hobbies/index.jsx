import { View, Text,Image} from 'react-native'

import styles from './styles';
import Title from '../../components/Tittle';
import TouchButton from '../../components/TouchButton';
export default function Hobbies() {
  return (
    <View style={styles.container}>
      <Title title="Hobbies" />
      <Image source={require('../../../assets/guitarra.png')} style={styles.image}/>
      <Text style={styles.text}>Gosto de tocar guitarra no estilo rock</Text>
      <Image source={require('../../../assets/curitian.jpg')} style={styles.image}/>
      <Text style={styles.text}>Gosto de jogar bola com os amigos</Text>
      <TouchButton route="Home" text="Voltar" />
    </View>
  );
};
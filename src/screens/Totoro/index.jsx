import { View, Text,} from 'react-native'

import styles from './styles';
import Title from '../../components/Tittle';
import TouchButton from '../../components/TouchButton';
export default function Totoro() {
  return (
    <View style={styles.container}>
        <Title title="Totoro Screen" />
        <TouchButton route="Home" text="Go to Home"  />
    </View>
  );
};
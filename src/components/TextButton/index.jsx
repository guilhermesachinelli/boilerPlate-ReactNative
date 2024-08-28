import { View, Text } from "react-native";

import styles from "./styles";

const TextButton = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextButton;
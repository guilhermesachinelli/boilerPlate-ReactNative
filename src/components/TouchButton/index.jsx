import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import TextButton from "../TextButton";

const TouchButton = ({ route, text}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route)}
      >
        <TextButton text={text} />
      </TouchableOpacity>
    </View>
  );
};

export default TouchButton;
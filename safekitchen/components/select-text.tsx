import React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type Props = TouchableOpacityProps & {
  text: string;
  visible?: boolean;
};

export function SelectText({ text, visible, ...rest }: Props) {
  return (
      <TouchableOpacity {...rest}>
        <Text style={styles.text}>• {text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: "#0a4b77ff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

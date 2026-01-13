import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type Props = TouchableOpacityProps & {
  date: string;
  status: "Agendado" | "Finalizado";
};

export function Relatorio({ date, status, ...rest }: Props) {
  const [eye, setEye] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.text}>
            • Visita do dia {date}
            {"\n"}Data: {date} - {status}
          </Text>
        </View>
        <View style={styles.iconView}>
          <TouchableOpacity onPress={()=> Linking.openURL("https://pdfobject.com/pdf/sample.pdf")}>
            <FontAwesome name="arrow-down" size={28} color="#0a4b77ff" />
          </TouchableOpacity>

          <FontAwesome
            name="eye"
            size={28}
            color="#0a4b77ff"
            onPress={() => setEye(!eye)}
          />
        </View>
      </View>
      {eye ? (
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity>
            <Text style={styles.option}> Visualizar </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.option}> Editar </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.delete}> Excluir </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    color: "#0a4b77ff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconView: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
  },
  option: {
    color: "#0a4b77ff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  delete: {
    marginTop: 10,
    color: "#841A1B",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

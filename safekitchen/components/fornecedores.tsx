import React from "react";

import { Linking, StyleSheet, Text, View } from "react-native";

export function Fornecedores() {
  const openWebsite = async (url: any) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Erro ao abrir a URL:", error);
    }
  };

  return (
    <View>
      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://gd7distribuidor.com.br/"
          )
        }
      >
        GD7 DISTRIBUIDOR DE ALIMENTOS LTDA. 
      </Text>
      <Text style={styles.description}>
        📍 Rod. BR116, KM16.5, 7950, Pedras, Itaitinga - CE, CEP: 61.880-000 
      </Text>
      <Text style={styles.link_number} onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=558533887777")}>
        📞 (85) 3388-7777
      </Text>

      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://institucional.donizetedistribuidora.com.br/quem-somos/"
          )
        }
      >
        DONIZETE DISTRIBUIDORA DE ALIMENTOS S/A
      </Text>
      <Text style={styles.description}>
        📍 Rua Raimundo Matias, 377 - Pedras, Itaitinga - CE, CEP: 61.887-880
      </Text>
      <Text style={styles.link_number} onPress={() => Linking.openURL("https://api.whatsapp.com/send?phone=5585996236242")}>
        📞 (85) 99623-6242
      </Text>

      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://idealalimentos.com.br/quem-somos/"
          )
        }
      >
        IDEAL ALIMENTOS
      </Text>
      <Text style={styles.description}>
        📍 R. Trajano de Águiar, 160 - Vila Velha, Fortaleza - CE, CEP: 60347-395
      </Text>
      <Text style={styles.link_number} onPress={() => Linking.openURL("https://api.whatsapp.com/send/?phone=5585989411477")}>
        📞 (85) 98941-1477
      </Text>

      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://polealimentos.com.br/sobre-nos/"
          )
        }
      >
        POLE ALIMENTO LTDA
      </Text>
      <Text style={styles.description}>
        📍 Av. Wilson Camurça, 401 - Distrito Industrial I, Maracanaú - CE, CEP: 61939-000
      </Text>
      <Text style={styles.link_number} onPress={() => Linking.openURL("https://api.whatsapp.com/send/?phone=558540427444")}>
        📞 (85) 4042-7444
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: "#0a4b77ff",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  description: {
    color: "#0a4b77ff",
    fontSize: 14,
  },
  link_number: {
    color: "#0a4b77ff",
    fontSize: 14,
    textDecorationLine: "underline",
    bottom: 2,
  }
});

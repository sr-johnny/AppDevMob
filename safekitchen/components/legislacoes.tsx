import React from "react";

import { Linking, StyleSheet, Text, View } from "react-native";

export function Legislacoes() {

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
        onPress={() => openWebsite("https://www.gov.br/anvisa/pt-br")}
      >
        Legislação Federal (ANVISA)
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/alimentos/manuais-guias-e-orientacoes/cartilha-boas-praticas-para-servicos-de-alimentacao.pdf"
          )
        }
      >
        RDC 216/04:
      </Text>
      <Text style={styles.description}>
        Principal norma para serviços de alimentação
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://www.gov.br/servidor/pt-br/siass/centrais_conteudo/manuais/resolucao-rdc-anvisa-n-275-de-21-de-outubro-de-2002.pdf/view"
          )
        }
      >
        RDC 275/02:
      </Text>
      <Text style={styles.description}>
        Focada em produtores e industrializadores de alimentos, mas relevante
        para quem prepara insumos.
      </Text>
      <Text
        style={styles.text}
        onPress={() =>
          openWebsite(
            "https://www.camara.leg.br/proposicoesWeb/prop_mostrarintegra?codteor=259606"
          )
        }
      >
        Lei Federal Nº 6.437/77:
      </Text>
      <Text style={styles.description}>
        Define as penalidades para infrações sanitárias.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    color: "#0a4b77ff",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  description: {
    color: "#0a4b77ff",
    fontSize: 14,
  }
});
import { router } from "expo-router";
import React from "react";

import { Image, StyleSheet, Text, TextProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
  src: "alpendre" | "blu" | "casa" | "dom" | "elandia" | "fino";
};

export function StepContainer({src, ...rest }: Props) {
  var sourceImage = "";

  function imageSRC() {
    switch (src) {
      case "alpendre":
        return <Image source={require('../assets/thumbs/alpendre.jpg')} style={styles.image} />
        break;
      case "blu":
        return <Image source={require('../assets/thumbs/blu.jpg')} style={styles.image} />
        break;
      case "casa":
        return <Image source={require('../assets/thumbs/casa.jpg')} style={styles.image} />
        break;
      case "dom":
        return <Image source={require('../assets/thumbs/dom.jpg')} style={styles.image} />
        break;
      case "elandia":
        return <Image source={require('../assets/thumbs/elandia.jpeg')} style={styles.image} />
        break;
      default:
        console.warn("Erro no banco de imagens");
        break;
    }
  }

  function titleSRC() {
    switch (src) {
      case "alpendre":
        return "Alpendre Self-Service"
        break;
      case "blu":
        return "Blu Méditerraneé"
        break;
      case "casa":
        return "Casa da Mamãe"
        break;
      case "dom":
        return "Dom Churrasco"
        break;
      case "elandia":
        return "Elandia Salgados"
        break;
      default:
        console.warn("Erro no banco de títulos");
        break;
    }
  }

  function descriptionSRC() {
    switch (src) {
      case "alpendre":
        return "Av. Eurípedes Ferreira Gomes, 609 - Bairro Pedrinhas, Sobral - CE, 62040-750"
        break;
      case "blu":
        return "Rua Dr. Monte, 535 - Centro, Sobral - CE, 62011-200"        
        break;
      case "casa":
        return "Av. Ildelfonso de Holanda Cavalcante, 362 - Centro, Sobral - CE, 62011-080"        
        break;
      case "dom":
        return "Av. Dom José Tupinambá da Frota, 2046 - Centro, Sobral - CE, 62010-295"        
        break;
      case "elandia":
        return "Rua Raimundo Olívar Carneiro, 96 - Betânia, Sobral - CE, 62044-050"
        break;
      default:
        console.warn("Erro no banco de descrição");
        break;
    }
  }

  function handlePage(){
      router.push(`/pagina?name=${titleSRC()}`);
    }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePage}>
      {imageSRC()}
      <View>
        <Text style={styles.title}>{titleSRC()}</Text>
        <Text style={styles.description}>{descriptionSRC()}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    color: "#0a4b77ff",
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    color: "#0a4b77ff",
    fontSize: 14,
  },
  icon: {
    fontSize: 20,
  },
  stepContainer: {
    flexDirection: "row",
  },
  image: {
    height: 80,
    width: 80,
    marginEnd: 10,
  },
});
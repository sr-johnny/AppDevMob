import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { ReactNode } from "react";

type Props = {
  content: ReactNode;
  bottomIMG?: number;
};

export function Dashboard({ content, bottomIMG, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Safe Kitchen </Text>
        <Text style={styles.icon}>✅</Text>
      </View>
      <View style={styles.content}>{content}</View>
      <Image
        source={require("../assets/images/germe.png")}
        style={styles.image1}
      />
      <Image
        source={require("../assets/images/germe.png")}
        style={{ ...styles.image2, bottom: bottomIMG ? bottomIMG : 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42,
    paddingHorizontal: 15,
    paddingBottom: 60,
    alignItems: "center",
    backgroundColor: "#AFDDF7",
  },
  content: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: "#E6E6E6",
    borderColor: "#333",
    borderWidth: 3,
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    height: 40,
    borderColor: "#333",
    borderWidth: 3,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  icon: {
    fontSize: 20,
  },
  image1: {
    right: -11,
    top: 60,
    height: 60,
    width: 60,
    position: "absolute",
  },
  image2: {
    left: -28,
    height: 80,
    width: 80,
    position: "absolute",
  },
});

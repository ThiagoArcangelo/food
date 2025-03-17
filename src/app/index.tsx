import { View, StyleSheet, ScrollView,  } from "react-native";
import Constants from "expo-constants"

import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";
import { Section } from "../components/Section";

const statusBarHeight = Constants.statusBarHeight; // Através da importação de Contants fornece a altura da StatusBar conforme o dispositivo, 

export default function Index() {
  return (
    <ScrollView style={styles.container} 
    showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Header />
        <Banner />
        <Search />
        <Section 
          name = "Comidas em alta"
          label = "Veja mais"
          size = "pequeno"
          action={() => console.log("Clicou no veja mais....")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E8F0",
  },
  header: {
    width: "100%",
    marginTop: statusBarHeight + 8, // Margem no topo do Header utilizando a altura da StatusBar responsivamente
    paddingLeft: 16,
    paddingRight: 16,
  },
});

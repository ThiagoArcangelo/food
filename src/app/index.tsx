import { View, StyleSheet, ScrollView,  } from "react-native";
import Constants from "expo-constants"

import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";
import { Section } from "../components/Section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from '../components/list';

const statusBarHeight = Constants.statusBarHeight; // Através da importação de Contants fornece a altura da StatusBar conforme o dispositivo, 

export default function Index() {
  return (
    <ScrollView className="text-xl" style={styles.container} 
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
        <TrendingFoods />

        <Section 
          name = "Famosos no DevFood"
          label = "Veja todos"
          size = "pequeno"
          action={() => console.log("Clicou no Famosos")}
        />

        <Restaurants />

        <Section 
          name = "Restaurantes"
          label = "Veja todos"
          size = "pequeno"
          action={() => console.log("Clicou no Restaurantes")}
        />

        <RestaurantVerticalList />
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

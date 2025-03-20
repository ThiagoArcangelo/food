import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { RestaurantProps } from '..'
import { Ionicons } from '@expo/vector-icons';

export function RestaurantItem({item}: {item: RestaurantProps}) {
 return (
    <Pressable 
        style={styles.container} 
        onPress={() => console.log("Clicou no restaurante " + item.name)}
    >
        <Image 
            source={{uri: item.image}}
            style={styles.image}
        /> 
        <View style={{flex: 1, gap: 8}}>
            <Text 
                style={styles.textoNome}
                numberOfLines={2}  
            >
                {item.name}
            </Text>

            <View style={styles.viewTexto}>
                <Ionicons name='star' size={14} color="#ca8a04"  />
                <Text style={{fontSize: 14,}}>4.5</Text>
            </View>
        </View> 
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 8,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 9999,
    },
    textoRestaurant: {
        fontSize: 12,
        marginTop: 8,
        width: 80,
        textAlign: "center",
        lineHeight: 14,
        color: "#000000",
    },
    view: {
        flex: 1,
        gap: 8,
    },
    viewTexto: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center"
    },
    textoNome: {
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
        fontWeight: "bold",
    },
});
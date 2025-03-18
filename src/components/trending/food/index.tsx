import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FoodProps } from '..';

export function CardHorizontalFood({ food }: { food: FoodProps }) {
 return (
   <Pressable style={styles.container}>
    <Image 
        source={{ uri: food.image }}
        style={styles.image}
    />
    
    <View style={styles.viewStar}>
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text style={styles.textoRating}>{food.rating}</Text>
    </View>

    <Text style={styles.foodPrice}>R$ {food.price}</Text>
    <Text style={styles.textName}>{food.name}</Text>
    <Text style={styles.textTime}>{food.time} - R$ {food.delivery}</Text>
   </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        borderRadius: 12,
        position: "relative",
    },
    image: {
        width: 176,
        height: 144,
        borderRadius: 12,
    },
    viewStar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "rgba(23,23,23, 0.9)",
        // Controla o tamnho do encapsulamento e centralização do conteúdo
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
        // ***************************************************************
        gap: 2,
        borderRadius: 9999,
        position: "absolute",
        top: 8,
        right: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    textoRating: {
        color: "#ffffff",
        fontSize: 14,
        lineHeight: 20,
    },
    foodPrice: {
        color: "#15803d",
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 28,
    },
    textName: {
        color: "#000000",
        marginTop: 4,
    },
    textTime: {
        color: "#525252",
        fontSize: 12,
    },
});
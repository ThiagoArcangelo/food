import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { RestaurantProps } from '..';

export function RestaurantItem({item}: {item: RestaurantProps}) {
 return (
   <Pressable 
        style={styles.container}
        onPress={() => console.log("Clicou no restaurante " + item.name)}
   >
    <Image 
        source={{uri: item.image}} 
        className='text-sm mt-2 w-20 text-center leading-2'
        style={styles.image}
    />
    <Text 
        style={styles.textoRestaurant} 
        numberOfLines={2}
    >
        {item.name}
    </Text>
   </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 9999,
    },
    textoRestaurant: {
        fontSize: 14,
        marginTop: 8,
        width: 80,
        textAlign: "center",
        lineHeight: 14,
        color: "#000000",
    }
});
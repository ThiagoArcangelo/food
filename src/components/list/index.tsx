import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RestaurantItem } from './item';

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export function RestaurantVerticalList() {

    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
    async function getFoods() {
        const response = await fetch("http://192.168.1.7:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
    }

    getFoods();
    }, []);
 
    return (
        <View style={styles.container}>
            {restaurants.map(item => (
                <RestaurantItem item={item}  key={item.id}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1,
        width: "100%",
        height: "100%",
        marginBottom: 44,
        gap: 16,
    },
});
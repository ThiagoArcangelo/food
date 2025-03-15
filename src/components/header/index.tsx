import { View, Pressable, Text, StyleSheet } from 'react-native'
import { Ionicons, Feather } from "@expo/vector-icons"

export function Header() {
    return (
      <View style={styles.container} className='gap-1'>
        <Pressable style={styles.click}>
            <Ionicons name="menu" size={20} color="#121212" />        
        </Pressable>

        <View style={styles.localizacao}>
            <Text>Localização</Text>
            <View style={styles.bell}>
                <Feather name="map-pin" size={14} color="#ff0000"/>
                <Text>Campo Grande</Text>
            </View>
        </View>

        <Pressable style={styles.click}>
            <Feather name="bell" size={20} color="#121212" />
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fef2f2",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        flexDirection: "row",
    },
    click: {
        width: 40,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 9999,
        justifyContent: "center",
        alignItems: "center",
    },
    bell: {
        width: 40,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 9999,
        justifyContent: "center",
        alignItems: "center",
    },
    localizacao: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    cidade: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    }
});
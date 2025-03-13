import { View, Pressable, Text, StyleSheet } from 'react-native'
import { Ionicons, Feather } from "@expo/vector-icons"

export function Header() {
    return (
      <View style={styles.container} className='text-slate-800'>
        <Pressable style={styles.menu}>
            <Ionicons name="menu" size={20} color="#121212" />        
        </Pressable>

        <View style={styles.localizacao}>
            <Text>Localização</Text>

            <View style={styles.cidade}>
                <Feather name="map-pin" size={14} color="#ff0000"/>
                <Text>Campo Grande</Text>
            </View>
        </View>

        <Pressable style={styles.bell}>
            <Feather name="bell" size={20} color="#121212" />
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    menu: {
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
        // flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    cidade: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    nomeCidade: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '700',
        color: "#1e293b"
    },
    labelLocalizacao: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 20,
    }
});
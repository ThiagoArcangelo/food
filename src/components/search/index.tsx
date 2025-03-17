import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export function Search() {
  return (
    <View style={styles.container} className='bg-red-50 h-full'>
        <Feather  name='search' size={24} color="#64748b"/>

        <TextInput placeholder='Procure sua comida...'  style={styles.inputTexto} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#64738b",
        height: 56,
        borderRadius: 9999,
        alignItems: "center",
        gap: 8,
        paddingLeft: 16,
        backgroundColor: "transparent",
    },
    inputTexto: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "transparent",
    },
});
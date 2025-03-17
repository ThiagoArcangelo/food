import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {
    name: string; 
    size: "pequeno" |  "medio" | "grande";
    label: string;
    action: () => void;
}

export function Section({name, size, label, action} :Props) {

  const tamanhoTexto = (size: "pequeno" | "medio" | "grande") => {
    switch(size) {
        case "pequeno" : return styles.textoPequeno;
        case "medio" : return styles.textoMedio;
        case "grande" : return styles.textoGrande;
    }
  }
    
  return (
    <View style={styles.container} className='font-semibold my-4 self-start'>

      <Text style={tamanhoTexto(size)}>
        {name}
      </Text>
        
      <Pressable onPress={action}>
        <Text >{label}</Text>
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
        paddingLeft: 16,
        paddingRight: 16,
    },
    textoPequeno: {
        fontSize: 18, 
        lineHeight: 28,
        fontWeight: 600,
        marginTop: 16, 
        marginBottom: 16,
        alignSelf: "flex-start",
    },
    textoMedio: {
        fontSize: 20, 
        lineHeight: 28,
        fontWeight: 600,
        marginTop: 16, 
        marginBottom: 16,
        alignSelf: "flex-start",
    },
    textoGrande: {
        fontSize: 24, 
        lineHeight: 32,
        fontWeight: 600,
        marginTop: 16, 
        marginBottom: 16,
        alignSelf: "flex-start",
    },
});
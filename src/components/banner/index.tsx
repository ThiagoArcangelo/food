import { View, Pressable, Image, StyleSheet } from 'react-native'
import PagerView from "react-native-pager-view";
import '@expo/match-media';
import { useMediaQuery } from 'react-responsive'


export function Banner() {

    const mobile = useMediaQuery({query: '(max-width: 768px'});
    const tablet = useMediaQuery({query: '(min-width: 769px) and (max-width: 1024)'});

    const bannerStyle = mobile ? styles.bannerMobile : styles.bannerTablet;

    return (
        <View style={styles.container} className='w-full h-60 rounded-2xl'> 
            <PagerView style={styles.pagerview} initialPage={0} pageMargin={14}>

                <Pressable 
                    style={bannerStyle} 
                    key="1"
                    onPress={() => console.log("Clicou no Banner 1!")}>
                    <Image 
                        source={require("../../assets/banner1.png")}
                        style={bannerStyle} />
                </Pressable>

                <Pressable 
                    style={bannerStyle} 
                    key="2"
                    onPress={() => console.log("Clicou no Banner 2!")}>
                    <Image 
                        source={require("../../assets/banner2.png")}
                        style={bannerStyle} />
                </Pressable>

            </PagerView>
        </View>
    )     
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 144,
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 16,
    },
    pagerview: {
        flex: 1,
    },
    bannerMobile: {
        width: "100%",
        height: 144,
        borderRadius: 16,
    },
    bannerTablet: {
        width: "100%",
        height: 240,
        borderRadius: 16,
    },
});
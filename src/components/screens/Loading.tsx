import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import backgroundImage from '../../assets/bitmap3.png';
import logoImage from '../../assets/reddit11.png';
const Loading = ({ navigation })=>{
    useEffect(() => {
        // Simulación de una carga de datos con una espera de 3 segundos
        setTimeout(() => {
            navigation.navigate('AccessCamera');
        }, 3000);
    }, []);
    return(
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.imageBackground}>
                <Image source={logoImage} style={styles.logo}/>
                <Text style={styles.text}>Cargando</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
      },
      logo : {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
      }
});
export default Loading;
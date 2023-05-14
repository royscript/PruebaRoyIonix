import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import backgroundImage from '../../assets/bitmap3.png';
import logoImage from '../../assets/reddit11.png';
import loadingStyles from '../styles/loadingStyles';
const Loading = ({ navigation })=>{
    useEffect(() => {
        // Simulación de una carga de datos con una espera de 3 segundos
        setTimeout(() => {
            navigation.navigate('AccessCamera');
        }, 3000);
    }, []);
    return(
        <View style={loadingStyles.container}>
            <ImageBackground
                source={backgroundImage}
                style={loadingStyles.imageBackground}>
                <Image source={logoImage} style={loadingStyles.logo}/>
                <Text style={loadingStyles.text}>Cargando</Text>
            </ImageBackground>
        </View>
    )
}
export default Loading;
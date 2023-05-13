import { Text, View, StyleSheet, Image } from 'react-native';
import usePermisos from "../../hooks/usePermisos";
import ButtonGradient from '../forms/ButtonGradient';
import ButtonWhite from '../forms/ButtonWhite';
import cameraImage from '../../assets/artwork3.png';
import notificationImage from '../../assets/artwork2.png';
import gpsImage from '../../assets/artwork1.png';
import { useEffect, useState } from 'react';
/* Contiene la informacion de cada pantalla de permisos */
const accessInformation = {
    camera : {
        title : 'Camera Access',
        description : 'Please allow access to your camera to take photos',
        background : cameraImage
    },
    notification : {
        title : 'Enable push',
        description : 'notificationsEnable push notifications to let send you personal news and updates.',
        background : notificationImage
    },
    gps : {
        title : 'Enable location services',
        description : 'We wants to access your location only to provide a better experience by helping you find new friends nearby.',
        background : gpsImage
    }
}
const Solicitudes = (props : any)=>{
    const { tipoNotificacion, siguientePantalla } = props;
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState(null);
    useEffect(()=>{
        /* Dependiendo del permiso enviado es la pantalla y la solicitud que se muestra */
        switch (tipoNotificacion) {
            case 'CAMERA':
                setTitle(accessInformation.camera.title);
                setDescription(accessInformation.camera.description);
                setImage(accessInformation.camera.background);
                break;
            case 'ACCESS_FINE_LOCATION':
                setTitle(accessInformation.gps.title);
                setDescription(accessInformation.gps.description);
                setImage(accessInformation.gps.background);
                break;
            case 'POST_NOTIFICATIONS':
                setTitle(accessInformation.notification.title);
                setDescription(accessInformation.notification.description);
                setImage(accessInformation.notification.background);
                break;
            default:
                break;
        }
    },[])
    
    /*
    hook usePermisos : sirve para dar permisos y conocer el estado de los permisos
    permisos : muestra el estado del permiso : true (permitido), false (no permitido)
    setRecargar : permite recargar los permisos
    */
    const [ permisos, setRecargar ] = usePermisos(tipoNotificacion,siguientePantalla);
    const handleRecargar = ()=>{
        setRecargar(true);
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        section: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 200,
            top : '70%'
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        text: {
            fontSize: 20,
            textAlign: 'center',
        },
        buttonContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
        titleContainer : {
            top : '50%'
        },
        textContainer : {
            width : '60%'
        },
        button: {
            backgroundColor: 'blue',
            padding: 10,
            margin: 5,
            borderRadius: 5,
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
    
    return (
        <View style={styles.container}>
            <View style={styles.section}>
            <View style={styles.imageContainer}>
                { image&&(
                    <Image source={image} style={styles.image} />
                ) }
            </View>
            </View>
            <View style={styles.section}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            </View>
            <View style={styles.section}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{description}</Text>
            </View>
            
            </View>
            <View style={styles.section}>
            <View style={styles.buttonContainer}>
                <ButtonGradient title={permisos?'Enable':'Allow'} onPress={()=>handleRecargar()}/>
                <ButtonWhite title='Cancel' onPress={()=>siguientePantalla()}/>
            </View>
            </View>
        </View>
    );
}
export default Solicitudes;
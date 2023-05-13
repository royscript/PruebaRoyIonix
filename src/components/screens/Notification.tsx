import { useLayoutEffect } from 'react';
import Solicitudes from './Solicitudes';

const Notification = ({ navigation })=>{
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return <Solicitudes tipoNotificacion='POST_NOTIFICATIONS' siguientePantalla={()=>navigation.navigate('AccessGps')}/>
}
export default Notification;